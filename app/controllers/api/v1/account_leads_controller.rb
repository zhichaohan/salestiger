module Api
  module V1
    class AccountLeadsController < ApplicationController
      before_action :authenticate_user!, only: [:update, :create]

      def update
        account_lead = current_user.account.account_leads.find_by(id: params[:id])

        account_lead.update!(account_lead_params)

        respond_to do |format|
          format.json do
            render json: account_lead,
                   serializer: AccountLeadSerializer
          end
        end
      end

      def create
        lead = Lead.find_by(slug: params[:lead_id])

        account_lead = lead.account_leads.create!(
          account: current_user.account
        )

        account_lead.update!(account_lead_params)

        respond_to do |format|
          format.json do
            render json: account_lead,
                   serializer: AccountLeadSerializer
          end
        end
      end

      def account_lead_params
        params.permit(:status)
      end
    end
  end
end
