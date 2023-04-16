class LeadSequenceStep < ApplicationRecord
  belongs_to :lead_sequence
  belongs_to :sequence_step
  belongs_to :email, optional: true

  def schedule!
    self.set_email!

    delay = self.sequence_step.hours_delay.minutes # self.sequence_step.hours_delay.hours

    self.update!(scheduled_for: Time.now + delay)

    jid = LeadSequenceSteps::PerformWorker.perform_in(delay, self.id)

    self.update!(job_id: jid)
  end

  def perform!
    jid = Emails::SendWorker.perform_async(self.email.id)

    self.next_step&.schedule!
  end

  def next_step
    a = self.lead_sequence.sequence.sequence_steps.find_by(order_index: self.sequence_step.order_index + 1)

    self.lead_sequence.lead_sequence_steps.find_or_create_by!(sequence_step: a) if a.present?
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
      email_id: self.email&.id,
      datetime: self.scheduled_for
    }
  end

  def cancel!
    return unless self.job_id.present?

    job = Sidekiq::ScheduledSet.new.find_job(self.job_id)
    job.delete if job.present?

    self.email.cancel! if self.email.present?

    self.destroy!
  end
end
