class AddSlugToSequences < ActiveRecord::Migration[5.2]
  def change
    add_column :sequences, :slug, :string
  end
end
