require 'google/apis/gmail_v1'
require 'rmail'

class Emails::SendWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  Gmail = Google::Apis::GmailV1

  def perform(id)
    email = Email.find_by(id: id)
    return unless email.present?

    if ENV['RAILS_ENV'] != 'production'
      email.update!(
        status: 'sent',
        sent_at: DateTime.now
      )
      email.update_account_lead_status!
    end

    return unless email.team_member.auth_token.present?

    return if email.status == 'canceled' || email.status == 'sent'

    gmail = Gmail::GmailService.new
    gmail.authorization = email.team_member.auth_token.as_credentials!

    message = RMail::Message.new
    message.header['To'] = "#{email.lead.name} <#{email.final_recipient}>"
    message.header['From'] = "#{email.team_member.name} <#{email.team_member.gmail}>"
    message.header['Subject'] = email.subject
    message.header['content-type'] = 'text/html; charset=utf-8'
    message.body = email.body_html + (email.team_member.email_signature || '') + email.open_email_pixel_html

    r = gmail.send_user_message('me',
                                upload_source: StringIO.new(message.to_s),
                                content_type: 'message/rfc822')

    email.update!(
      gmail_id: r.id,
      status: 'sent',
      sent_at: DateTime.now,
      gmail_thread_id: r.thread_id,
      snippet: r.snippet
    )
    email.update_account_lead_status!
  end
end
