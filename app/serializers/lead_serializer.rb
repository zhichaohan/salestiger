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
             :slug,
             :lead_sequences,
             :lead_linkedin_sequences

  belongs_to :company

  def account_info
    return unless @instance_options[:account_leads].present?

    info = @instance_options[:account_leads].find { |al| al.lead_id == object.id }

    return if info.blank?

    AccountLeadSerializer.new(info).to_h
  end

  def lead_sequences
    object.lead_sequences.select { |ls| ls.sequence.workflow.account_id == @instance_options[:account_id] }
      .map{ |ls| LeadSequenceSerializer.new(ls).to_h }
  end

  def lead_linkedin_sequences
    object.lead_linkedin_sequences.select { |ls| ls.linkedin_sequence.workflow.account_id == @instance_options[:account_id] }
      .map{ |ls| LeadLinkedinSequenceSerializer.new(ls).to_h }
  end
end
