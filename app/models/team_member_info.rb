class TeamMemberInfo < ApplicationRecord
  def icon
  end

  def date_display
    return "#{self.start_date.year} - #{self.end_date.year}" if self.end_date.present?

    self.start_date.year
  end
end
