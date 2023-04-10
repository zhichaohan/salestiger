class Lead < ApplicationRecord
  belongs_to :company

  def email_sendable?
    self.business_email.present? || self.personal_email.present?
  end

  def start_sequence!(sequence)
    return unless self.email_sendable?

    sequence.sequence_steps.each do |step|
      self.perform_step!(step)
    end
  end

  def perform_step!(step)
    team_member = step.sequence.workflow.team_members.email_activated.randomize.first

    email = team_member.emails.create!(
      lead: self,
      subject: step.generate_email_subject(self),
      body_html: step.generate_email_body(self),
      recipient: self.business_email || self.personal_email
    )

    jid = Emails::SendWorker.perform_in(step.hours_delay.hours, email.id)
  end
end
