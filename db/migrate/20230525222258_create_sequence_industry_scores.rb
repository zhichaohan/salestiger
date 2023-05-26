class CreateSequenceIndustryScores < ActiveRecord::Migration[5.2]
  def change
    create_table :sequence_industry_scores do |t|
      t.references :sequence, foreign_key: true, index: true, null: false
      t.string :industry, null: false
      t.float :score

      t.timestamps
    end
  end
end
