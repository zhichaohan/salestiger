class AddGmailColumnsToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :gmail_id, :string
    add_column :emails, :status, :string
  end
end
