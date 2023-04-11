module Api
  module V1
    class WorkflowAttributesController < ApplicationController
      before_action :authenticate_user!, only: [:create]

      def create
        workflow = Workflow.find_by(id: params[:workflow_id])

        workflow_attribute = workflow.workflow_attributes.create!(
          name: params[:name],
          value: params[:value]
        )

        respond_to do |format|
          format.json do
            render json: workflow_attribute
          end
        end
      end
    end
  end
end
