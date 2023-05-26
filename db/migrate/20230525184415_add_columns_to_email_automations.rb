class AddColumnsToEmailAutomations < ActiveRecord::Migration[5.2]
  def change
    add_column :email_automations, :exclude_leads_with_email_across_accounts, :boolean
  end
end
