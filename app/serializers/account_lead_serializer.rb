class AccountLeadSerializer < ActiveModel::Serializer
  attributes :status

  belongs_to :last_sent_email
end
