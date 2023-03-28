class CreateSequenceSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :sequence_steps do |t|
      t.references :sequence, foreign_key: true, index: true, null: false
      t.integer :hours_delay, null: false
      t.string :email_subject
      t.text :email_template

      t.timestamps
    end
  end
end
