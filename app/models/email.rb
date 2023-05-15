class Email < ApplicationRecord
  include Routable

  belongs_to :team_member
  belongs_to :lead
  has_many :lead_sequence_steps

  scope :sent_or_received, -> { where(status: ['sent', 'received']).where.not(sent_at: nil) }
  scope :not_in_sequence, -> { left_outer_joins(:lead_sequence_steps).where(lead_sequence_steps: { id: nil }) }

  after_create :notify_slack_after_create!

  def final_recipient
    return self.recipient if true # ENV['ENABLE_SEND_EXTERNAL_EMAIL'] == 'true'

    "zhichao+lead-#{self.lead.uuid}@salestiger.io"
  end

  def update_account_lead_status!
    account_lead = self.team_member.account.account_leads.find_or_create_by!(lead: self.lead)

    if account_lead.status.blank?
      account_lead.update!(status: 'Engaged')
    end

    account_lead.update!(last_sent_email: self)
  end

  def to_log_description
    "<b>#{self.subject}</b> - #{self.snippet || self.sanitized_body_html[0, 20]}"
  end

  def to_log_statuses
    if self.status == 'sent'
      log_statuses = [{ type: 'success', label: 'sent' }]

      if self.open_count.present? && self.open_count  > 0
        log_statuses.push({ type: 'info', label: "opened #{self.open_count} times" })
      end

      return log_statuses
    end

    if self.status == 'received'
      log_statuses = [{ type: 'success', label: 'received' }]

      return log_statuses
    end

    return [{ type: 'danger', label: 'canceled' }] if self.status == 'canceled'

    [{ type: 'primary', label: 'scheduled' }]
  end

  def sanitized_body_html
    ActionView::Base.full_sanitizer.sanitize(self.body_html)
  end

  def can_edit?
    self.status != 'sent' && self.status != 'canceled' && self.status != 'received'
  end

  def can_cancel?
    self.status != 'sent' && self.status != 'canceled' && self.status != 'received'
  end

  def cancel!
    self.update(status: 'canceled')
  end

  def to_log
    {
      id: self.id,
      type: "Email",
      title: self.status == 'sent' ? "Individual Email" : 'Lead Replied',
      subtitle: "Sequence",
      description: self.to_log_description || "",
      statuses: self.to_log_statuses || [],
      can_edit: false,
      can_cancel: false,
      email_id: self.id,
      datetime: self.sent_at
    }
  end

  def open_email_pixel_html
    return "" unless ENV['RAILS_ENV'] == 'production'

    return "<img src='#{self.opened_email_pixel_url}' width='1' height='1' />"
  end

  def opened_email_pixel_url
    opened_email_pixel_url_api_v1_email_url(id: self.uuid)
  end

  def notify_slack_after_create!
    return unless self.status == 'received'

    SlackService.notify_product_notifications("New Email Reply:\nFrom: #{self.from}\nTo: #{self.recipient}\nSubject: #{self.subject}\nBody: #{self.body_html}")
  end
end
