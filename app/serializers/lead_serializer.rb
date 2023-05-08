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
             :id,
             :show_path,
             :slug

  belongs_to :company
  has_many :lead_sequences, serializer: LeadSequenceSerializer

  def account_info
    return unless @instance_options[:account_leads].present?

    info = @instance_options[:account_leads].find { |al| al.lead_id == object.id }

    return if info.blank?

    AccountLeadSerializer.new(info).to_h
  end
end
