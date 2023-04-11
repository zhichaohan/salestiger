module Api
  module V1
    class WorkflowsController < ApplicationController
      before_action :authenticate_user!, only: [:index]

      def index
        workflows = current_user.account.workflows.preload(
          :target_audience,
          :product,
          :sequences,
          workflow_team_members: :team_member
        )

        respond_to do |format|
          format.json do
            render json: workflows, each_serializer: WorkflowSerializer, include: { workflow_team_members: :team_member, sequences: [] }
          end
        end
      end

      def show
        workflow = current_user.account
                               .workflows
                               .preload(
                                 workflow_team_members: :team_member,
                                 workflow_leads: { lead: :company },
                                 sequences: []
                               ).friendly.find(params[:id])

        account_leads = current_user.account.account_leads.where(lead_id: workflow.leads.pluck(:id))

        respond_to do |format|
          format.json do
            render json: workflow,
                   serializer: WorkflowSerializer,
                   account_leads: account_leads,
                   status: 200,
                   include: {
                     product: {},
                     target_audience: {},
                     workflow_team_members: :team_member,
                     workflow_leads: { lead: :company },
                     sequences: [],
                     workflow_attributes: []
                   }
          end
        end
      end
    end
  end
end
