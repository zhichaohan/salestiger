class WorkflowSerializer < ActiveModel::Serializer
  attributes :name,
             :active,
             :num_leads,
             :num_meetings,
             :pipeline_generated,
             :messages_sent,
             :slug,
             :motivation

  belongs_to :target_audience, optional: true
  belongs_to :product, optional: true
  has_many :workflow_team_members, serializer: WorkflowTeamMemberSerializer
  has_many :workflow_leads, serializer: WorkflowLeadSerializer
end
