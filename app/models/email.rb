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
end
