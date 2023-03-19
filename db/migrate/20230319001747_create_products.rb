class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.references :account, null: false, foreign_key: true, index: true
      t.string :name, null: false

      t.timestamps
    end
  end
end
