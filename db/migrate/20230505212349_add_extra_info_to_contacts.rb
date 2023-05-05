class AddExtraInfoToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :landing_page_contacts, :extra_info, :string
  end
end
