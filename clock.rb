require 'clockwork'
require 'active_support/time'

require './config/boot'
require './config/environment'

module Clockwork
  handler do |job|
    puts "Running #{job}"
  end

  every(1.week, 'Run TeamMembers::GmailSubscribeWorker', :at => 'Monday 8:00') do
    TeamMembers::GmailSubscribeWorker.perform_async
  end
end
