class CreateLeadSequenceSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :lead_sequence_steps do |t|
      t.references :lead_sequence, foreign_key: true, null: false, index: true
      t.references :sequence_step, foreign_key: true, null: false, index: true
      t.references :email, foreign_key: true, index: true
      t.datetime :scheduled_for
      t.string :job_id

      t.timestamps
    end
  end
end
