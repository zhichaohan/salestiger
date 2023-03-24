class AddUuidToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    enable_extension 'uuid-ossp'
    add_column :team_members, :uuid, :uuid, default: "uuid_generate_v4()", null: false
  end
end
