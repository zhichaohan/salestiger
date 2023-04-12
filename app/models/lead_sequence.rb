class LeadSequence < ApplicationRecord
  belongs_to :lead
  belongs_to :sequence
  belongs_to :team_member

  has_many :lead_sequence_steps

  def start!
    return unless self.lead.email_sendable?

    self.sequence.sequence_steps.each do |step|
      lead_sequence_step = self.lead_sequence_steps.find_or_create_by!(sequence_step: step)

      lead_sequence_step.perform!
    end
  end
end
