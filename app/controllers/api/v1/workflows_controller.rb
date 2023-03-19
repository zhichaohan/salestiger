module Api
  module V1
    class WorkflowsController < ApplicationController
      before_action :authenticate_user!, only: [:index]

      def index
        workflows = current_user.account.workflows.preload(:target_audience, :product, :team_members)

        respond_to do |format|
          format.json do
            render json: workflows, each_serializer: WorkflowSerializer
          end
        end
      end
    end
  end
end
