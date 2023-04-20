class AddStatusColumnsToLeadImports < ActiveRecord::Migration[5.2]
  def change
    add_column :lead_imports, :uuid, :uuid, default: "uuid_generate_v4()", null: false
    add_column :lead_imports, :status, :string
  end
end
