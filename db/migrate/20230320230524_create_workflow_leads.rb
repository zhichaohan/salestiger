class CreateWorkflowLeads < ActiveRecord::Migration[5.2]
  def change
    create_table :workflow_leads do |t|
      t.references :workflow, foreign_key: true, index: true, null: false
      t.references :lead, foreign_key: true, index: true, null: false

      t.timestamps
    end
  end
end
