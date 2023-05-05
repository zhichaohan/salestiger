class LandingPageContact < ApplicationRecord
  def notify_slack!
    SlackService.notify_product_notifications("New landing page contact:\nName: #{self.first_name} #{self.last_name}\nEmail: #{self.email}\nExtra Info: #{self.extra_info}")
  end
end
