class Account < ApplicationRecord
  extend FriendlyId

  friendly_id :name, use: :slugged

  has_many :users
  has_many :team_members
  has_many :target_audiences
  has_many :products
  has_many :workflows
end
