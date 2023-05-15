class AddGmailHistoryIdToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :team_members, :gmail_history_id, :integer
  end
end
