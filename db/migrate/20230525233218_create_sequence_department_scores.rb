class CreateSequenceDepartmentScores < ActiveRecord::Migration[5.2]
  def change
    create_table :sequence_department_scores do |t|
      t.references :sequence, foreign_key: true, index: true, null: false
      t.string :department, null: false
      t.float :score

      t.timestamps
    end
  end
end
