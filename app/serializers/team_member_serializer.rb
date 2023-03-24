class TeamMemberSerializer < ActiveModel::Serializer
  attributes :name,
             :title,
             :photo_url,
             :slug,
             :facebook_url,
             :gmail,
             :twitter_url,
             :instagram_url,
             :linkedin_url,
             :show_path,
             :auth_token_id,
             :uuid

  has_many :team_member_infos, each_serializer: TeamMemberInfoSerializer
end
