class AddColumnsToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :team_members, :title, :string
    add_column :team_members, :photo_url, :string
  end
end
