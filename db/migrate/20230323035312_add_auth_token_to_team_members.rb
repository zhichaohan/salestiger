class AddAuthTokenToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_reference :team_members, :auth_token, foreign_key: true
  end
end
