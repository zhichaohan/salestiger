module Api
  module V1
    class WorkflowAttributesController < ApplicationController
      before_action :authenticate_user!, only: [:create]

      def create
        workflow = Workflow.find_by(id: params[:workflow_id])

        workflow_attribute = workflow.workflow_attributes.create!(workflow_attribute_params)

        respond_to do |format|
          format.json do
            render json: workflow_attribute
          end
        end
      end

      def update
        workflow_attribute = current_account.workflow_attributes.find(params[:id])

        workflow_attribute.update(workflow_attribute_params)

        respond_to do |format|
          format.json do
            render json: workflow_attribute
          end
        end
      end

      def workflow_attribute_params
        params.permit(:name, :value)
      end
    end
  end
end
