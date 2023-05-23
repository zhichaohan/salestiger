class AddSlugToTargetAudience < ActiveRecord::Migration[5.2]
  def change
    add_column :target_audiences, :slug, :string
  end
end
