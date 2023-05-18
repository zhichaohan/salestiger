class CreateLinkedinSequenceSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :linkedin_sequence_steps do |t|
      t.references :linkedin_sequence, foreign_key: true, index: true, null: false
      t.integer :hours_delay, null: false
      t.string :message
      t.integer :order_index, null: false

      t.timestamps
    end
  end
end
