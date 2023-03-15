class AddLogoToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :logo_url, :string
  end
end
