class AccountLeadTeamMemberSerializer < ActiveModel::Serializer
  attributes :linkedin_status_indicator

  belongs_to :team_member
end
