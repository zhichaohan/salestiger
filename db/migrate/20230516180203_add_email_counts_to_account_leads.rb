class AddEmailCountsToAccountLeads < ActiveRecord::Migration[5.2]
  def change
    add_column :account_leads, :sent_email_count, :integer, default: 0
    add_column :account_leads, :sent_email_open_count, :integer, default: 0
    add_column :account_leads, :received_email_count, :integer, default: 0
  end
end
