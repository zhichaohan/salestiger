class SequenceStep < ApplicationRecord
  belongs_to :sequence

  def sanitized_email_template
    return unless self.email_template.present?

    ActionView::Base.full_sanitizer.sanitize(self.email_template)
  end

  def generate_email_subject(lead, team_member)
    str = lead.process_merge_keys(self.email_subject)
    str = team_member.process_merge_keys(str)
    self.sequence.workflow.process_merge_keys(str)
  end

  def generate_email_body(lead, team_member)
    self.email_template
  end
end
