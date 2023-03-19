class AddColumnsToWorkflowTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :workflow_team_members, :num_leads, :integer
    add_column :workflow_team_members, :num_meetings, :integer
    add_column :workflow_team_members, :pipeline_generated, :integer
    add_column :workflow_team_members, :messages_sent, :integer
  end
end
