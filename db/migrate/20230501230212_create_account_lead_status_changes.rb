class CreateAccountLeadStatusChanges < ActiveRecord::Migration[5.2]
  def change
    create_table :account_lead_status_changes do |t|
      t.references :account, null: false, foreign_key: true, index: true
      t.references :lead, null: false, foreign_key: true, index: true
      t.string :previous_status, null: false
      t.string :new_status, null: false

      t.timestamps
    end
  end
end
