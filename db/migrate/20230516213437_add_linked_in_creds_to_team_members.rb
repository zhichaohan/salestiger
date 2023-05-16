class AddLinkedInCredsToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :team_members, :linkedin_email, :string
    add_column :team_members, :linkedin_password, :string
    add_column :team_members, :linkedin_verified, :boolean
  end
end
