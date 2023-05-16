require "base64"

module Api
  module V1
    class TeamMembersController < ApplicationController
      before_action :authenticate_user!, only: [:index]

      def index
        team_members = current_user.account.team_members

        respond_to do |format|
          format.json do
            render json: team_members, each_serializer: TeamMemberSerializer
          end
        end
      end

      def show
        team_member = current_user.account.team_members.friendly.find(params[:id])

        respond_to do |format|
          format.json do
            render json: team_member, serializer: TeamMemberSerializer
          end
        end
      end

      def update
        team_member = current_user.account.team_members.friendly.find(params[:id])

        team_member.update(team_member_params)

        respond_to do |format|
          format.json do
            render json: team_member, serializer: TeamMemberSerializer
          end
        end
      end

      def gmail_callback
        team_member = TeamMember.find_by(uuid: params[:id])
        data = params.dig(:message).dig(:data)
        history_id = JSON.parse(Base64.decode64(data))&.dig('historyId') if data.present?

        if history_id > team_member.gmail_history_id
          Emails::UpdateFromHistoryWorker.perform_async(team_member.id, history_id)
        end

        render json: {}, status: :ok
      end

      def team_member_params
        params.permit(:email_signature)
      end
    end
  end
end
