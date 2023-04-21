class AddLastOpenedAtToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :last_opened_at, :datetime
  end
end
