class AccountLeadTeamMember < ApplicationRecord
  belongs_to :account_lead
  belongs_to :team_member

  after_save :update_account_lead_score!

  LINKEDIN_STATUS = [
    'pending invitation',
    'pending connection',
    'connected',
    'messaged awaiting response',
    'engaged'
  ]

  def linkedin_status_indicator
    if self.linkedin_status == 'connected' || self.linkedin_status == 'engaged'
      return { type: 'success', label: self.linkedin_status }
    end

    { type: 'info', label: self.linkedin_status }
  end

  def update_account_lead_score!
    self.account_lead.calculate_score!

    self.account_lead.save!
  end
end
