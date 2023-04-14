class SequenceStep < ApplicationRecord
  belongs_to :sequence

  def sanitized_email_template
    return unless self.email_template.present?

    ActionView::Base.full_sanitizer.sanitize(self.email_template)
  end
end
