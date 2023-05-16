class TeamMembers::GmailSubscribeWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform
    TeamMember.email_activated.each do |team_member|
      SlackService.notify_product_notifications("Set up for team member #{team_member.gmail}")
      team_member.setup_gmail_watcher!
    end
  end
end
