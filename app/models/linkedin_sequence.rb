class LinkedinSequence < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  belongs_to :workflow
  has_many :linkedin_sequence_steps, -> { order(order_index: :asc) }
  has_many :lead_linkedin_sequences

  def show_path
    "/workflows/#{self.workflow.slug}/linkedin_sequences/#{self.slug}"
  end
end
