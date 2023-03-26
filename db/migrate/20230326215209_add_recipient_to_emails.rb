class AddRecipientToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :recipient, :string
  end
end
