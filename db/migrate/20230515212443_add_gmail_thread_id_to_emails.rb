class AddGmailThreadIdToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :gmail_thread_id, :string
  end
end
