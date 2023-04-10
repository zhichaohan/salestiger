class Leads::StartSequenceWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(lead_id, sequence_id)
    lead = Lead.find_by(id: lead_id)
    return unless lead.present?

    sequence = Sequence.find_by(id: sequence_id)
    return unless sequence.present?

    lead.start_sequence!(sequence)
  end
end
