class AddColumnsToTargetAudiences < ActiveRecord::Migration[5.2]
  def change
    add_column :target_audiences, :industries, :string, array: true
    add_column :target_audiences, :min_company_size, :integer
    add_column :target_audiences, :max_company_size, :integer
  end
end
