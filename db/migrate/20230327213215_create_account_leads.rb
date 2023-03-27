class CreateAccountLeads < ActiveRecord::Migration[5.2]
  def change
    create_table :account_leads do |t|
      t.references :account, foreign_key: true, index: true, null: false
      t.references :lead, foreign_key: true, index: true, null: false
      t.string :status

      t.timestamps
    end
  end
end
