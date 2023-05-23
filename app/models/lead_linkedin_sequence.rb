class LeadLinkedinSequence < ApplicationRecord
  belongs_to :lead
  belongs_to :linkedin_sequence
  belongs_to :team_member

  def notify!
    SlackService.notify_linkedin_bot("Lead ID: #{lead.id} has been added to sequence: #{linkedin_sequence.id}\nTeam Member: #{team_member.name}\nLead Linkedin URL: #{lead.linkedin_url}\nInvitation Note: #{self.generate_invitation_note}")
  end

  def generate_invitation_note
    str = self.lead.process_merge_keys(self.invitation_note)
    str = self.team_member.process_merge_keys(str)
    self.linkedin_sequence.workflow.process_merge_keys(str)
  end
end
