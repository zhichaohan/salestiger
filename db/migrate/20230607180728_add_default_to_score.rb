class AddDefaultToScore < ActiveRecord::Migration[5.2]
  def change
    change_column :account_leads, :score, :integer, default: 0
  end
end
