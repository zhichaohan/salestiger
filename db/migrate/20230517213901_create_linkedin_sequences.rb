class CreateLinkedinSequences < ActiveRecord::Migration[5.2]
  def change
    create_table :linkedin_sequences do |t|
      t.references :workflow, foreign_key: true, index: true, null: false
      t.string :name
      t.string :invitation_note
      t.string :slug

      t.timestamps
    end
  end
end
