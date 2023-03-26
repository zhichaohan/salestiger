class TeamMember < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :team_member_infos
  belongs_to :auth_token, optional: true
  has_many :emails

  include Routable

  def show_path
    "/team_members/#{self.slug}"
  end
end
