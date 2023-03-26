module Api
  module V1
    class EmailsController < ApplicationController
      before_action :authenticate_user!, only: [:index]

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
    end
  end
end
