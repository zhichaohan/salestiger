class CreateLeadLinkedinSequences < ActiveRecord::Migration[5.2]
  def change
    create_table :lead_linkedin_sequences do |t|
      t.references :lead, foreign_key: true, null: false, index: true
      t.references :linkedin_sequence, foreign_key: true, null: false, index: true
      t.references :team_member, foreign_key: true, null: false, index: true

      t.timestamps
    end
  end
end
