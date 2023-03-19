class WorkflowTeamMember < ApplicationRecord
  belongs_to :workflow
  belongs_to :team_member
end
