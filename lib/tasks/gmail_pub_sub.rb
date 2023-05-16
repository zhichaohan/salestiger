return

require "google/cloud/pubsub"
pubsub = Google::Cloud::PubSub.new
t = TeamMember.find_or_create_by!(name: 'Nathan Reeves')

topic = pubsub.create_topic "gmail-#{t.uuid}"
push_config = Google::Cloud::PubSub::Subscription::PushConfig.new endpoint: "https://ba18-172-117-162-246.ngrok.io/api/v1/team_members/#{t.uuid}/gmail_callback"
sub = topic.subscribe "gmail-sub-#{t.uuid}", push_config: push_config
topic.publish "testing"

require 'google/apis/gmail_v1'
require 'rmail'
Gmail = Google::Apis::GmailV1
gmail = Gmail::GmailService.new
gmail.authorization = t.auth_token.as_credentials!
watch_request = Gmail::WatchRequest.new
watch_request.label_filter_action = 'include'
watch_request.label_ids = ['UNREAD']
watch_request.topic_name = topic.name
watch_response = gmail.watch_user('me', watch_request)


require "base64"
data = 'eyJlbWFpbEFkZHJlc3MiOiJ6aGljaGFvQHNhbGVzdGlnZXIuaW8iLCJoaXN0b3J5SWQiOjQ2OTc3fQ=='
json = Base64.decode64(data)
res = JSON.parse(json)
history_id = res['historyId']
history = gmail.list_user_histories('me', start_history_id: history_id)
result = gmail.get_user_message('me', '7723610697314062')
