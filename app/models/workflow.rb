class Workflow < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  belongs_to :target_audience, optional: true
  belongs_to :product, optional: true
  has_many :workflow_team_members
  has_many :team_members, through: :workflow_team_members
  has_many :workflow_leads
  has_many :leads, through: :workflow_leads
  has_many :sequences
  has_many :workflow_attributes
  has_many :linkedin_sequences
  belongs_to :account

  def process_merge_keys(text)
    str = text
    self.workflow_attributes.each do |wa|
      str = str.gsub("{{#{wa.name.upcase}}}", wa.value)
    end

    str
  end

  def update_statistics!
    self.update!(
      num_leads: self.workflow_team_members.sum(:num_leads),
      num_meetings: self.workflow_team_members.sum(:num_meetings),
      pipeline_generated: self.workflow_team_members.sum(:pipeline_generated),
      messages_sent: self.workflow_team_members.sum(:messages_sent)
    )
  end

  def copy_to_account!(another_account)
    another_target_audience = nil
    if self.target_audience.present?
      another_target_audience = another_account.target_audiences.find_or_create_by!(name: self.target_audience.name)
      another_target_audience.update!(
        titles: self.target_audience.titles,
        industry: self.target_audience.industry,
        company_size: self.target_audience.company_size,
        location: self.target_audience.location
      )
    end

    another_product = nil
    if self.product.present?
      another_product = another_account.products.find_or_create_by!(name: self.product.name)
      another_product.update!(
        description: self.product.description,
        average_selling_price: self.product.average_selling_price
      )
    end

    another_workflow = another_account.workflows.find_or_create_by!(
      type: "Workflow::SaleProduct",
      name: self.name
    )

    another_workflow.update!(
      target_audience: another_target_audience,
      product: another_product,
      motivation: self.motivation,
      active: self.active
    )

    self.workflow_attributes.each do |wa|
      another_workflow.workflow_attributes.find_or_create_by!(
        name: wa.name,
        value: wa.value
      )
    end

    self.sequences.each do |sequence|
      another_sequence = another_workflow.sequences.find_or_create_by!(
        name: sequence.name,
        active: sequence.active
      )

      sequence.sequence_steps.each do |sequence_step|
        another_sequence_step = another_sequence.sequence_steps.find_or_create_by!(
          order_index: sequence_step.order_index,
          hours_delay: sequence_step.hours_delay
        )
        another_sequence_step.update!(
          email_subject: sequence_step.email_subject,
          email_template: sequence_step.email_template
        )
      end
    end

    self.linkedin_sequences.each do |linkedin_sequence|
      another_linkedin_sequence = another_workflow.linkedin_sequences.find_or_create_by!(
        name: linkedin_sequence.name
      )
      another_linkedin_sequence.update!(
        invitation_note: linkedin_sequence.invitation_note
      )

      linkedin_sequence.linkedin_sequence_steps.each do |linkedin_sequence_step|
        another_linkedin_sequence_step = another_linkedin_sequence.linkedin_sequence_steps.find_or_create_by!(
          order_index: linkedin_sequence_step.order_index
        )
        another_linkedin_sequence_step.update!(
          hours_delay: sequence_step.hours_delay,
          message: sequence_step.message
        )
      end
    end

    another_workflow
  end
end
