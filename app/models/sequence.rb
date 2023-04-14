class Sequence < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  belongs_to :workflow
  has_many :sequence_steps, -> { order(hours_delay: :asc) }
  has_many :lead_sequences
end
