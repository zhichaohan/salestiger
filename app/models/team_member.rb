class TeamMember < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :team_member_infos

  include Routable

  def show_path
    "/team_members/#{self.slug}"
  end
end
