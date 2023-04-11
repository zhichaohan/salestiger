class Leads::StartSequenceWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(lead_sequence_id)
    lead_sequence = LeadSequence.find_by(id: lead_sequence_id)
    return unless lead_sequence.present?

    lead_sequence.lead.start_sequence!(lead_sequence.sequence, lead_sequence.team_member)
  end
end
