class AddSlugToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :team_members, :slug, :string
  end
end
