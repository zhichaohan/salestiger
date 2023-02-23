class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  scope :newest_first, -> { order(created_at: :desc) }
  scope :oldest_first, -> { order(:id) }
  scope :randomize, -> { order("RANDOM()") }

  def how_long_ago(time)
    return unless time.present?

    if time > 5.minute.ago
      return 'now'
    elsif time > 1.hour.ago
      return "#{((Time.now - time) / 1.minute).round} minutes ago"
    elsif time > 2.hour.ago
      return "1 hour ago"
    elsif time > 1.day.ago
      return "#{((Time.now - time) / 1.hour).round} hours ago"
    elsif time > 2.day.ago
      return "1 day ago"
    elsif time > 1.week.ago
      return "#{((Time.now - time) / 1.day).round} day ago"
    elsif time > 2.week.ago
      return "1 week ago"
    elsif time > 1.month.ago
      return "#{((Time.now - time) / 1.week).round} weeks ago"
    elsif time > 2.month.ago
      return "1 month ago"
    end

    "#{((Time.now - time) / 1.month).round} months ago"
  end

  def created_at_readable
    self.created_at.strftime('%B %d, %Y')
  end
end
