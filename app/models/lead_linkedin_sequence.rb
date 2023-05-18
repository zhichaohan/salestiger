class LeadLinkedinSequence < ApplicationRecord
  belongs_to :lead
  belongs_to :linkedin_sequence
  belongs_to :team_member

  def notify!
    SlackService.notify_linkedin_bot("Lead ID: #{lead.id} has been added to sequence: #{linkedin_sequence.id}")
  end
end
