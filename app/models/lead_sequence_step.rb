class LeadSequenceStep < ApplicationRecord
  belongs_to :lead_sequence
  belongs_to :sequence_step
  belongs_to :email, optional: true

  def perform!
    self.set_email!
    self.update!(scheduled_for: Time.now + self.sequence_step.hours_delay.hours)

    jid = Emails::SendWorker.perform_in(self.sequence_step.hours_delay.hours, self.email.id)

    self.update!(job_id: jid)
  end

  def set_email!
    email = self.lead_sequence.team_member.emails.create!(
      lead: self.lead,
      subject: self.generate_email_subject,
      body_html: self.generate_email_body,
      recipient: self.lead.business_email || self.lead.personal_email
    )

    self.update!(email: email)

    email
  end

  def lead
    self.lead_sequence.lead
  end

  def team_member
    self.lead_sequence.team_member
  end

  def sequence
    self.lead_sequence.sequence
  end

  def generate_email_subject
    str = self.lead.process_merge_keys(self.sequence_step.email_subject)
    str = self.team_member.process_merge_keys(str)
    self.sequence.workflow.process_merge_keys(str)
  end

  def generate_email_body
    str = self.lead.process_merge_keys(self.sequence_step.email_template)
    str = self.team_member.process_merge_keys(str)
    self.sequence.workflow.process_merge_keys(str)
  end

  def to_log
    {
      id: self.id,
      type: "LeadSequenceStep",
      title: self.lead_sequence.sequence.name,
      subtitle: "Sequence",
      description: self.email&.to_log_description || "",
      statuses: self.email&.to_log_statuses || [],
      can_edit: self.email&.can_edit? || false,
      can_cancel: self.email&.can_cancel? || false,
      email_id: self.email&.id
    }
  end
end
