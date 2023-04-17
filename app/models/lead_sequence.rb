class LeadSequence < ApplicationRecord
  belongs_to :lead
  belongs_to :sequence
  belongs_to :team_member

  has_many :lead_sequence_steps, dependent: :destroy

  def first_step
    a = self.sequence.first_step

    self.lead_sequence_steps.find_or_create_by!(sequence_step: a) if a.present?
  end

  def start!
    return unless self.lead.email_sendable?

    self.first_step&.schedule!
  end
end
