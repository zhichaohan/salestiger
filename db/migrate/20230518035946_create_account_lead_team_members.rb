class CreateAccountLeadTeamMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :account_lead_team_members do |t|
      t.references :account_lead, foreign_key: true, null: false, index: true
      t.references :team_member, foreign_key: true, null: false, index: true
      t.string :linkedin_status

      t.timestamps
    end
  end
end
