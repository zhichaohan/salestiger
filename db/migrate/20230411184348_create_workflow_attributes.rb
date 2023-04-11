class CreateWorkflowAttributes < ActiveRecord::Migration[5.2]
  def change
    create_table :workflow_attributes do |t|
      t.references :workflow, foreign_key: true, null: false, index: true
      t.string :name, null: false
      t.string :value, null: false

      t.timestamps
    end
  end
end
