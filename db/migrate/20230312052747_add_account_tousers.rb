class AddAccountTousers < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :account, foreign_key: true, null: false, index: true
  end
end
