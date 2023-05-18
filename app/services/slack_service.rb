class SlackService
  def self.notify_product_notifications(message)
    return unless ENV['SLACK_PRODUCT_NOTIFICATIONS_WEBHOOK_URL'].present?

    notifier = Slack::Notifier.new(ENV['SLACK_PRODUCT_NOTIFICATIONS_WEBHOOK_URL'])
    notifier.ping(message)
  end

  def self.notify_linkedin_bot(message)
    return unless ENV['SLACK_LINKEDIN_BOT_WEBHOOK_URL'].present?

    notifier = Slack::Notifier.new(ENV['SLACK_LINKEDIN_BOT_WEBHOOK_URL'])
    notifier.ping(message)
  end
end
