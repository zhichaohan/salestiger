class Lead < ApplicationRecord
  belongs_to :company
  has_many :lead_sequences

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
end
