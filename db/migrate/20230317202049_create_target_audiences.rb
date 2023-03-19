class CreateTargetAudiences < ActiveRecord::Migration[5.2]
  def change
    create_table :target_audiences do |t|
      t.references :account, foreign_key: true, null: false, index: true
      t.string :name, null: false
      t.string :titles, array: true
      t.string :industry
      t.string :company_size
      t.string :location

      t.timestamps
    end
  end
end
