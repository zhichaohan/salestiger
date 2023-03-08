class CreateLandingPageContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :landing_page_contacts do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :company_name

      t.timestamps
    end
  end
end
