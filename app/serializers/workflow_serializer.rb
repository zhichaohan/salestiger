class WorkflowSerializer < ActiveModel::Serializer
  attributes :name,
             :active,
             :num_leads,
             :num_meetings

  belongs_to :target_audience, optional: true
  belongs_to :product, optional: true
  has_many :team_members
end
