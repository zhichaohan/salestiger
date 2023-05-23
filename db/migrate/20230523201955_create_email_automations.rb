class CreateEmailAutomations < ActiveRecord::Migration[5.2]
  def change
    create_table :email_automations do |t|
      t.references :sequence, foreign_key: true, null: false, index: true
      t.boolean :exclude_engaged_leads
      t.boolean :exclude_engaged_leads_across_accounts

      t.timestamps
    end
  end
end
