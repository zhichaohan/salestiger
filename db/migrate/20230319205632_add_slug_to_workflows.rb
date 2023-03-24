class AddSlugToWorkflows < ActiveRecord::Migration[5.2]
  def change
    add_column :workflows, :slug, :string
  end
end
