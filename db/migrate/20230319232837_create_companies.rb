class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.integer :num_employees
      t.string :industry
      t.string :logo_url
      t.string :linkedin_url
      t.string :twitter_url
      t.string :facebook_url
      t.string :website_url

      t.timestamps
    end
  end
end
