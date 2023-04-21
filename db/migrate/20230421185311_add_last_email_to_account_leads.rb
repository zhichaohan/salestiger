class AddLastEmailToAccountLeads < ActiveRecord::Migration[5.2]
  def change
    add_reference :account_leads, :last_sent_email, foreign_key: { to_table: :emails }
  end
end
