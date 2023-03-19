class WorkflowTeamMemberSerializer < ActiveModel::Serializer
  attributes :num_leads,
             :num_meetings,
             :pipeline_generated,
             :messages_sent

  belongs_to :team_member
end
