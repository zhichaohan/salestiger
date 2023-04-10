class SequenceStep < ApplicationRecord
  belongs_to :sequence

  def sanitized_email_template
    return unless self.email_template.present?

    ActionView::Base.full_sanitizer.sanitize(self.email_template)
  end

  def generate_email_subject(lead)
    self.email_subject
  end

  def generate_email_body(lead)
    self.email_template
  end
end
