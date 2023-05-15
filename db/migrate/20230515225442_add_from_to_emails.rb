class AddFromToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :from, :string
  end
end
