class TeamMembers::GmailSubscribeWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform
    TeamMember.email_activated.each do |team_member|
      team_member.setup_gmail_watcher!
    end
  end
end
