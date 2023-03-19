class AddProductToWorkflows < ActiveRecord::Migration[5.2]
  def change
    add_reference :workflows, :product, foreign_key: true
    add_column :workflows, :motivation, :string
    add_column :products, :description, :string
  end
end
