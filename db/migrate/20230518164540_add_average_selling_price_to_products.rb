class AddAverageSellingPriceToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :average_selling_price, :integer
  end
end
