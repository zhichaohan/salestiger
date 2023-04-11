class LeadSerializer < ActiveModel::Serializer
  attributes :name,
             :title,
             :business_email,
             :personal_email,
             :phone,
             :location,
             :linkedin_url,
             :twitter_url,
             :uuid,
             :account_info,
             :id

  belongs_to :company
  has_many :lead_sequences, serializer: LeadSequenceSerializer

  def account_info
    return unless @instance_options[:account_leads].present?

    @instance_options[:account_leads].find { |al| al.lead_id == object.id }
  end
end
