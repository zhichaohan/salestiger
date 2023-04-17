class AddOrderToSteps < ActiveRecord::Migration[5.2]
  def change
    add_column :sequence_steps, :order_index, :integer, null: false
  end
end
