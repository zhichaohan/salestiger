module Api
  module V1
    class EmailsController < ApplicationController
      before_action :authenticate_user!, only: [:index, :create]

      def index

      end

      def show
        email = Email.find(params[:id])

        respond_to do |format|
          format.json do
            render json: email, serializer: EmailSerializer
          end
        end
      end

      def update
        email = Email.find(params[:id])

        email.update(email_params)

        respond_to do |format|
          format.json do
            render json: email, serializer: EmailSerializer
          end
        end
      end

      def create
        team_member = current_user.account.team_members.find_by(uuid: params[:team_member_id])
        lead = Lead.find_by(uuid: params[:lead_id])

        email = team_member.emails.create!(
          lead: lead,
          subject: params[:subject],
          body_html: params[:body_html],
          recipient: params[:recipient]
        )

        Emails::SendWorker.perform_async(email.id)

        respond_to do |format|
          format.json do
            render json: email, serializer: EmailSerializer
          end
        end
      end

      def opened_email_pixel_url
        email = Email.find_by(uuid: params[:id])

        if email.present? && email.created_at < 2.minutes.ago
          email.increment!(:open_count)
          email.update!(last_opened_at: Time.now)
        end

        send_data(Base64.decode64("R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="), :type => "image/gif", :disposition => "inline")
      end

      def email_params
        params.permit(:body_html, :subject)
      end
    end
  end
end
