class Lead < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  include Routable

  belongs_to :company
  has_many :lead_sequences
  has_many :lead_sequence_steps, through: :lead_sequences
  has_many :lead_linkedin_sequences
  has_many :emails
  belongs_to :lead_import, optional: true
  has_many :account_leads

  def self.deep_includes
    { lead_sequences: [:sequence], company: {}, lead_linkedin_sequences: [:linkedin_sequence] }
  end

  def email_sendable?
    self.business_email.present? || self.personal_email.present?
  end

  def start_sequence!(sequence, team_member)
    return unless self.email_sendable?

    sequence.sequence_steps.each do |step|
      self.perform_step!(step, team_member)
    end
  end

  def perform_step!(step, team_member)
    email = team_member.emails.create!(
      lead: self,
      subject: step.generate_email_subject(self, team_member),
      body_html: step.generate_email_body(self, team_member),
      recipient: self.business_email || self.personal_email
    )

    jid = Emails::SendWorker.perform_in(step.hours_delay.hours, email.id)
  end

  def process_merge_keys(text)
    str = text
    str = str.gsub("{{LEAD FIRST NAME}}", self.first_name)
    str = str.gsub("{{LEAD LAST NAME}}", self.last_name)

    str = self.company.process_merge_keys(str)

    str
  end

  def first_name
    name.split(" ")[0]
  end

  def last_name
    return name.split.last if name.split.count > 1

    ""
  end

  def show_path
    "/leads/#{self.slug}"
  end

  def logs(account_id)
    email_logs = self.emails.sent_or_received.not_in_sequence.map { |e| e.to_log }

    sequence_logs = Account.find(account_id)
                           .lead_sequence_steps
                           .preload(:email, lead_sequence: { sequence: :workflow })
                           .where(lead_sequences: { lead_id: self.id })
                           .map { |step| step.to_log }

    status_logs = AccountLeadStatusChange.where(account_id: account_id, lead: self).map { |sc| sc.to_log }

    logs = email_logs + sequence_logs + status_logs

    logs.sort! { |a, b| a[:datetime] <=> b[:datetime] }
  end

  def self.all_titles
    Rails.cache.fetch("all_lead_titles", expires_in: 24.hours) do
      self.pluck("DISTINCT title")
    end
  end

  def self.all_departments
    Rails.cache.fetch("all_lead_departments", expires_in: 24.hours) do
      self.pluck("DISTINCT departments").compact.map { |d| d&.split(',') }.flatten.map { |d| d.strip }.uniq
    end
  end
end
