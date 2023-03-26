class LeadSerializer < ActiveModel::Serializer
  attributes :name,
             :title,
             :business_email,
             :personal_email,
             :phone,
             :location,
             :linkedin_url,
             :twitter_url,
             :uuid

  belongs_to :company
end
