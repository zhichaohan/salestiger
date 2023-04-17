class Sequence < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  belongs_to :workflow
  has_many :sequence_steps, -> { order(order_index: :asc) }
  has_many :lead_sequences

  def first_step
    self.sequence_steps.find_by(order_index: 1)
  end
end
