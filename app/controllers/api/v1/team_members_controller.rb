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
    end
  end
end
