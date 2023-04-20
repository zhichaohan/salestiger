class CreateLeadImports < ActiveRecord::Migration[5.2]
  def change
    create_table :lead_imports do |t|
      t.string :csv_url, null: false
      t.references :user, null: false
      t.integer :success_count
      t.integer :error_count

      t.timestamps
    end
  end
end
