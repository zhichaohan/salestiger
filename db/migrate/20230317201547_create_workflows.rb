class CreateWorkflows < ActiveRecord::Migration[5.2]
  def change
    create_table :workflows do |t|
      t.references :account, null: false, index: true, foreign_key: true
      t.string :name, null: false
      t.string :type, null: false

      t.timestamps
    end
  end
end
