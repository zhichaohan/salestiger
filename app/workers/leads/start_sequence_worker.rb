class Leads::StartSequenceWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(team_member_id, lead_id, sequence_id)
    lead = Lead.find_by(id: lead_id)
    return unless lead.present?

    sequence = Sequence.find_by(id: sequence_id)
    return unless sequence.present?

    team_member = TeamMember.find_by(id: team_member_id)
    return unless team_member.present?

    lead.start_sequence!(sequence, team_member)
  end
end
