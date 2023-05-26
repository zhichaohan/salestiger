class CreateSequenceNumEmployeesScores < ActiveRecord::Migration[5.2]
  def change
    create_table :sequence_num_employees_scores do |t|
      t.references :sequence, foreign_key: true, index: true, null: false
      t.integer :min_num_employees, null: false
      t.integer :max_num_employees, null: false
      t.float :score

      t.timestamps
    end
  end
end
