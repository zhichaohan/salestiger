class AddSnippetToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :snippet, :string
  end
end
