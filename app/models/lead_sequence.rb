class LeadSequence < ApplicationRecord
  belongs_to :lead
  belongs_to :sequence
  belongs_to :team_member

  has_many :lead_sequence_steps, dependent: :destroy

  scope :for_industry, ->(industry) { joins(lead: :company).where(companies: { industry: industry }) }
  scope :with_employee_size, ->(min_num_employees, max_num_employees) { joins(lead: :company).where(companies: { num_employees: min_num_employees..max_num_employees }) }
  scope :for_department, ->(department) { joins(:lead).where("leads.departments LIKE ?", "%#{department}%") }
  scope :with_account_leads, ->(account_id) { joins("JOIN account_leads ON lead_sequences.lead_id = account_leads.lead_id AND account_leads.account_id = ", account_id) }


  def first_step
    a = self.sequence.first_step

    self.lead_sequence_steps.find_or_create_by!(sequence_step: a) if a.present?
  end

  def start!
    return unless self.lead.email_sendable?

    self.first_step&.schedule!
  end
end
