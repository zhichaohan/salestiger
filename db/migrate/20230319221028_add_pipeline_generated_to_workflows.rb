class AddPipelineGeneratedToWorkflows < ActiveRecord::Migration[5.2]
  def change
    add_column :workflows, :pipeline_generated, :integer
    add_column :workflows, :messages_sent, :integer
  end
end
