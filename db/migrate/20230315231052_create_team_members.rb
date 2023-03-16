class CreateTeamMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :team_members do |t|
      t.references :account, foreign_key: true, index: true, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
