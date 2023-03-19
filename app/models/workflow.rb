class Workflow < ApplicationRecord
  belongs_to :target_audience, optional: true
  belongs_to :product, optional: true
  has_many :workflow_team_members
  has_many :team_members, through: :workflow_team_members
end
