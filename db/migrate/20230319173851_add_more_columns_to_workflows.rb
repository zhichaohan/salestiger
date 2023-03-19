class AddMoreColumnsToWorkflows < ActiveRecord::Migration[5.2]
  def change
    add_column :workflows, :active, :boolean, default: false, null: false
    add_column :workflows, :num_leads, :integer
    add_column :workflows, :num_meetings, :integer
  end
end
