class Account < ApplicationRecord
  extend FriendlyId

  friendly_id :name, use: :slugged

  has_many :users
  has_many :team_members
  has_many :target_audiences
  has_many :products
  has_many :workflows
  has_many :account_leads
  has_many :sequences, through: :workflows
  has_many :linkedin_sequences, through: :workflows
  has_many :lead_sequences, through: :sequences
  has_many :lead_sequence_steps, through: :lead_sequences

  def sync_account_leads_last_sent_email!
    self.team_members.each do |team_member|
      distinct_lead_ids = team_member.emails.pluck(:lead_id).uniq

      distinct_lead_ids.each do |lead_id|
        account_lead = self.account_leads.find_or_create_by!(account: self, lead_id: lead_id)

        account_lead.sync_last_sent_email!
      end
    end
  end
end
