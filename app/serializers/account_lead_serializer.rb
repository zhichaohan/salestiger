class AccountLeadSerializer < ActiveModel::Serializer
  attributes :status, :id, :status_indicator

  belongs_to :last_sent_email
end
