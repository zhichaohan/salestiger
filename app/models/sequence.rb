class Sequence < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  include Routable

  belongs_to :workflow
  has_many :sequence_steps, -> { order(order_index: :asc) }, dependent: :destroy
  has_many :lead_sequences, dependent: :destroy
  has_many :sequence_industry_scores, dependent: :destroy
  has_many :sequence_department_scores, dependent: :destroy
  has_many :sequence_num_employees_scores, dependent: :destroy
  has_many :email_automations, dependent: :destroy

  def first_step
    self.sequence_steps.find_by(order_index: 1)
  end

  def show_path
    "/workflows/#{self.workflow.slug}/sequences/#{self.slug}"
  end

  def create_basic_automation!
    self.email_automations.create!(
      exclude_engaged_leads: true,
      exclude_leads_with_email_across_accounts: true,
      num_qualified_leads: 25,
      num_random_leads: 25
    )
  end
end
