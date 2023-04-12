class TeamMember < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :team_member_infos
  belongs_to :auth_token, optional: true
  has_many :emails
  belongs_to :account

  include Routable

  scope :email_activated, -> { where.not(auth_token_id: nil) }

  def show_path
    "/team_members/#{self.slug}"
  end

  def process_merge_keys(text)
    str = text
    str = str.gsub("{{TEAM MEMBER FIRST NAME}}", self.first_name)
    str = str.gsub("{{TEAM MEMBER LAST NAME}}", self.last_name)

    str
  end

  def first_name
    name.split(" ")[0]
  end

  def last_name
    return name.split.last if name.split.count > 1

    ""
  end
end
