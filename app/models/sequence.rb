class Sequence < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  include Routable

  belongs_to :workflow
  has_many :sequence_steps, -> { order(order_index: :asc) }, dependent: :destroy
  has_many :lead_sequences, dependent: :destroy

  def first_step
    self.sequence_steps.find_by(order_index: 1)
  end

  def show_path
    "/workflows/#{self.workflow.slug}/sequences/#{self.slug}"
  end
end
