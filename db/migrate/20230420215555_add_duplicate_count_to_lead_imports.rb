class AddDuplicateCountToLeadImports < ActiveRecord::Migration[5.2]
  def change
    add_column :lead_imports, :duplicate_count, :integer
  end
end
