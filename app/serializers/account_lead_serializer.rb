class AccountLeadSerializer < ActiveModel::Serializer
  attributes :status, :id, :status_indicator, :sent_email_count, :sent_email_open_count, :received_email_count, :score

  belongs_to :last_sent_email
  has_many :account_lead_team_members, serializer: AccountLeadTeamMemberSerializer
end
