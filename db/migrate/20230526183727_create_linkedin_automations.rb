class CreateLinkedinAutomations < ActiveRecord::Migration[5.2]
  def change
    create_table :linkedin_automations do |t|
      t.references :linkedin_sequence, foreign_key: true, index: true, null: false
      t.integer :num_daily_invitations, null: false, default: 0

      t.timestamps
    end
  end
end
