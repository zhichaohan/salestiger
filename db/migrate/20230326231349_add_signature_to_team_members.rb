class AddSignatureToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :team_members, :email_signature, :text
  end
end
