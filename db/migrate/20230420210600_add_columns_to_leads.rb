class AddColumnsToLeads < ActiveRecord::Migration[5.2]
  def change
    add_column :leads, :apollo_id, :string
    add_index :leads, :apollo_id

    add_column :companies, :address, :string
    add_column :companies, :city, :string
    add_column :companies, :state, :string
    add_column :companies, :phone, :string
    add_column :companies, :annual_revenue, :integer
    add_column :companies, :total_funding, :integer
    add_column :companies, :latest_funding, :string
    add_column :companies, :latest_funding_amount, :integer
    add_column :companies, :last_raised_at, :date
    add_column :companies, :keywords, :string
    add_column :companies, :seo_description, :string
    add_column :companies, :technologies, :string

    add_column :leads, :seniority, :string
    add_column :leads, :departments, :string
    add_column :leads, :city, :string
    add_column :leads, :state, :string

    add_reference :leads, :lead_import, foreign_key: true, index: true
  end
end
