class CreateTeamMemberInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :team_member_infos do |t|
      t.references :team_member, foreign_key: true, index: true, null: false
      t.string :type, null: false
      t.string :label, null: false
      t.string :location
      t.date :start_date, null: false
      t.date :end_date

      t.timestamps
    end
  end
end
