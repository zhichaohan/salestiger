class TeamMember < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :team_member_infos
end
