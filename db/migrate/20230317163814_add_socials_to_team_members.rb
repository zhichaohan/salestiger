class AddSocialsToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :team_members, :facebook_url, :string
    add_column :team_members, :gmail, :string
    add_column :team_members, :twitter_url, :string
    add_column :team_members, :instagram_url, :string
    add_column :team_members, :linkedin_url, :string
  end
end
