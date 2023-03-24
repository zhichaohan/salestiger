class Workflow < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  belongs_to :target_audience, optional: true
  belongs_to :product, optional: true
  has_many :workflow_team_members
  has_many :team_members, through: :workflow_team_members
  has_many :workflow_leads
  has_many :leads, through: :workflow_leads
end
