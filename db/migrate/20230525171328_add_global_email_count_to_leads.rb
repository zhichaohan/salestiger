class AddGlobalEmailCountToLeads < ActiveRecord::Migration[5.2]
  def change
    add_column :leads, :global_email_count, :integer, default: 0, null: false
  end
end
