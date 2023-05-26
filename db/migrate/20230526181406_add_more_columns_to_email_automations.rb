class AddMoreColumnsToEmailAutomations < ActiveRecord::Migration[5.2]
  def change
    add_column :email_automations, :num_qualified_leads, :integer, default: 0
    add_column :email_automations, :num_random_leads, :integer, default: 0
  end
end
