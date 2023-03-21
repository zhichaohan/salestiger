class CreateLeads < ActiveRecord::Migration[5.2]
  def change
    create_table :leads do |t|
      t.string :name, null: false
      t.string :title
      t.references :company, foreign_key: true, index: true
      t.string :business_email
      t.string :personal_email
      t.string :phone
      t.string :location
      t.string :linkedin_url
      t.string :twitter_url

      t.timestamps
    end
  end
end
