class Email < ApplicationRecord
  belongs_to :team_member
  belongs_to :lead

  def final_recipient
    return self.recipient if ENV['ENABLE_SEND_EXTERNAL_EMAIL'] == 'true'

    "zhichao+lead-#{self.lead.uuid}@salestiger.io"
  end

  def update_account_lead_status!
    account_lead = self.team_member.account.account_leads.find_or_create_by!(lead: self.lead)

    if account_lead.status.blank?
      account_lead.update!(status: 'approaching')
    end
  end

  def to_log_description
    "<b>#{self.subject}</b> - #{self.sanitized_body_html[0, 20]}"
  end

  def to_log_statuses
    return [{ type: 'success', label: 'sent' }] if self.status == 'sent'

    [{ type: 'primary', label: 'scheduled' }]
  end

  def sanitized_body_html
    ActionView::Base.full_sanitizer.sanitize(self.body_html)
  end

  def can_edit?
    self.status != 'sent'
  end

  def can_cancel?
    self.status != 'sent'
  end
end
