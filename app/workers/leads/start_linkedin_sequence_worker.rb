class Leads::StartLinkedinSequenceWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(lead_linkedin_sequence_id)
    lead_linkedin_sequence = LeadLinkedinSequence.find_by(id: lead_linkedin_sequence_id)
    return unless lead_linkedin_sequence.present?

    lead_linkedin_sequence.notify!
  end
end
