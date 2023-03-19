module Api
  module V1
    class WorkflowsController < ApplicationController
      before_action :authenticate_user!, only: [:index]

      def index
        workflows = current_user.account.workflows.preload(
          :target_audience,
          :product,
          workflow_team_members: :team_member
        )

        respond_to do |format|
          format.json do
            render json: workflows, each_serializer: WorkflowSerializer, include: { workflow_team_members: :team_member }
          end
        end
      end

      def show
        workflow = current_user.account.workflows.friendly.find(params[:id])

        respond_to do |format|
          format.json do
            render json: workflow, serializer: WorkflowSerializer, status: 200, include: { workflow_team_members: :team_member }
          end
        end
      end
    end
  end
end
