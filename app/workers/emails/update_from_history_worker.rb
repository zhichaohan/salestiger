require 'google/apis/gmail_v1'

class Emails::UpdateFromHistoryWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  Gmail = Google::Apis::GmailV1

  def perform(team_member_id, history_id)
    team_member = TeamMember.find_by(id: team_member_id)
    return unless team_member.present?
    return if team_member.gmail_history_id > history_id

    team_member.with_lock do
      gmail = Gmail::GmailService.new
      gmail.authorization = team_member.auth_token.as_credentials!
      history = gmail.list_user_histories('me', start_history_id: team_member.gmail_history_id, label_id: 'UNREAD')

      latest_history_id = team_member.gmail_history_id
      if history.history.present?
        history.history.each do |last_history|
          latest_history_id = last_history.id

          if last_history.messages_added.present?
            last_history.messages_added.each do |message_added|
              if team_member.emails.where(gmail_thread_id: message_added.message.thread_id).exists?
                if team_member.emails.where(gmail_id: message_added.message.id).empty?
                  gmail_message = gmail.get_user_message('me', message_added.message.id)
                  payload = gmail_message.payload
                  headers = payload.headers

                  lead = team_member.emails.where(gmail_thread_id: gmail_message.thread_id).last.lead
                  subject = headers.any? { |h| h.name == 'Subject' } ? headers.find { |h| h.name == 'Subject' }.value : ''
                  body_html = payload.body.data
                  if body_html.nil? && payload.parts.any?
                    body_html = payload.parts.map { |part| part.body.data }.join
                  end
                  from = headers.any? { |h| h.name == 'From' } ? headers.find { |h| h.name == 'From' }.value : ''
                  recipient = headers.any? { |h| h.name == 'To' } ? headers.find { |h| h.name == 'To' }.value : ''
                  sent_at = headers.any? { |h| h.name == 'Date' } ? headers.find { |h| h.name == 'Date' }.value : ''
                  snippet = gmail_message.snippet

                  team_member.emails.create!(
                    lead: lead,
                    subject: subject,
                    body_html: body_html.encode("UTF-8", invalid: :replace, undef: :replace, replace: ""),
                    recipient: recipient,
                    gmail_id: gmail_message.id,
                    status: 'received',
                    sent_at: sent_at,
                    gmail_thread_id: gmail_message.thread_id,
                    from: from,
                    snippet: snippet
                  )
                end
              end
            end
          end
        end
      end

      team_member.update(gmail_history_id: latest_history_id)
    end
  end
end
