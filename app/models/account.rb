class Account < ApplicationRecord
  extend FriendlyId

  friendly_id :name, use: :slugged

  has_many :users
  has_many :team_members
end
