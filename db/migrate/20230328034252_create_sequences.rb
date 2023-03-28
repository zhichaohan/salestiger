class CreateSequences < ActiveRecord::Migration[5.2]
  def change
    create_table :sequences do |t|
      t.references :workflow, foreign_key: true, index: true, null: false
      t.string :name
      t.boolean :active

      t.timestamps
    end
  end
end
