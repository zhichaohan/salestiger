class AddColumnsToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :features, :string, array: true, default: []
    add_column :products, :problemStats, :string, array: true, default: []
    add_column :products, :benefits, :string, array: true, default: []
    add_column :products, :needPayoffStats, :string, array: true, default: []
  end
end
