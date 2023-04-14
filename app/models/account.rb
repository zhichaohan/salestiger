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
  has_many :lead_sequences, through: :sequences
  has_many :lead_sequence_steps, through: :lead_sequences
end
