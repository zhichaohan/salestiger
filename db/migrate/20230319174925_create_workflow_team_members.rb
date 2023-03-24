class CreateWorkflowTeamMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :workflow_team_members do |t|
      t.references :workflow, null: false, foreign_key: true, index: true
      t.references :team_member, null: false, foreign_key: true, index: true

      t.timestamps
    end
  end
end
