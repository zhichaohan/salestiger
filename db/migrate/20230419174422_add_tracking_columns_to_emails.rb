class AddTrackingColumnsToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :uuid, :uuid, default: "uuid_generate_v4()", null: false
    add_column :emails, :open_count, :integer
  end
end
