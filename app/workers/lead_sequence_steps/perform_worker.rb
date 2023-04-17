class LeadSequenceSteps::PerformWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(lead_sequence_step_id)
    lead_sequence_step = LeadSequenceStep.find_by(id: lead_sequence_step_id)
    return unless lead_sequence_step.present?

    lead_sequence_step.perform!
  end
end
