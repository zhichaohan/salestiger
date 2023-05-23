require 'google/apis/gmail_v1'
require "google/cloud/pubsub"

class TeamMember < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :team_member_infos
  belongs_to :auth_token, optional: true
  has_many :emails
  belongs_to :account

  include Routable

  scope :email_activated, -> { where.not(auth_token_id: nil) }

  Gmail = Google::Apis::GmailV1

  def show_path
    "/team_members/#{self.slug}"
  end

  def edit_path
    "/team_members/#{self.slug}/edit"
  end

  def process_merge_keys(text)
    str = text
    str = str.gsub("{{TEAM MEMBER FIRST NAME}}", self.first_name)
    str = str.gsub("{{TEAM MEMBER LAST NAME}}", self.last_name)

    str
  end

  def first_name
    name.split(" ")[0]
  end

  def last_name
    return name.split.last if name.split.count > 1

    ""
  end

  def setup_gmail_watcher!
    pubsub = Google::Cloud::PubSub.new

    # create the topic
    topic = pubsub.topic(gmail_topic_name)
    if topic.blank?
      topic = pubsub.create_topic(gmail_topic_name)
    end

    # set the policy
    topic.policy do |p|
      p.roles['roles/pubsub.admin'] = ['allAuthenticatedUsers']
    end

    # create the subscription
    sub = topic.subscription(gmail_subscription_name)
    if sub.blank?
      push_config = Google::Cloud::PubSub::Subscription::PushConfig.new endpoint: gmail_subscription_endpoint
      sub = topic.subscribe gmail_subscription_name, push_config: push_config
    end

    # update the endpoint
    sub.endpoint = gmail_subscription_endpoint

    # set the watcher
    gmail = Gmail::GmailService.new
    gmail.authorization = self.auth_token.as_credentials!
    watch_request = Gmail::WatchRequest.new
    watch_request.label_filter_action = 'include'
    watch_request.label_ids = ['UNREAD']
    watch_request.topic_name = topic.name
    watch_response = gmail.watch_user('me', watch_request)

    if watch_response.present? && watch_response.history_id.present?
      self.update!(gmail_history_id: watch_response.history_id)
      return true
    end

    false
  end

  def gmail_topic_name
    "gmail-#{self.uuid}"
  end

  def gmail_subscription_name
    "gmail-sub-#{self.uuid}"
  end

  def gmail_subscription_endpoint
    "#{root_url}api/v1/team_members/#{self.uuid}/gmail_callback"
    # "https://8cf2-172-117-162-246.ngrok.io/api/v1/team_members/#{self.uuid}/gmail_callback"
  end

  def connected_gmail
    self.auth_token.present? && self.gmail_history_id.present?
  end

  def send_linkedin_invite!(lead)
    ac = self.account.account_leads.find_by(lead: lead)

    if ac.blank?
      ac = self.account.account_leads.find_or_create_by!(lead: lead)
    end

    actm = ac.account_lead_team_members.find_or_create_by!(team_member: self)
    actm.update!(linkedin_status: 'pending connection')
  end
end
