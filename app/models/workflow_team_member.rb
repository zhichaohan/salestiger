class WorkflowTeamMember < ApplicationRecord
  belongs_to :workflow
  belongs_to :team_member

  def update_statistics!
    leads = LeadSequence.where(sequence_id: self.workflow.sequences.pluck(:id), team_member: self.team_member)
    num_meetings = leads.joins("JOIN account_leads ON lead_sequences.lead_id = account_leads.lead_id AND account_leads.account_id = #{self.workflow.account.id} AND account_leads.status IN ('Meeting Set', 'Meeting Attended', 'Redzone')").count
    messages_sent = LeadSequenceStep.joins(:lead_sequence).where(lead_sequences: { sequence_id: self.workflow.sequences.pluck(:id) }).joins(:email).where(emails: { status: 'sent' }).count

    self.update!(
      num_leads: leads.count,
      num_meetings: num_meetings,
      pipeline_generated: num_meetings * self.workflow.product.average_selling_price,
      messages_sent: messages_sent
    )
  end
end
