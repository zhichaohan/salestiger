class AddScoreToAccountLeads < ActiveRecord::Migration[5.2]
  def change
    add_column :account_leads, :score, :integer
  end
end
