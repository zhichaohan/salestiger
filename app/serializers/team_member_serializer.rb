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
             :uuid,
             :email_signature,
             :connected_gmail,
             :linkedin_email,
             :linkedin_password

  has_many :team_member_infos, each_serializer: TeamMemberInfoSerializer
end
