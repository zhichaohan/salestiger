module Api
  module V1
    class LeadsController < ApplicationController
      before_action :authenticate_user!, only: [:index]

      def index
        leads = Lead.preload(:company).all

        account_leads = current_user.account.account_leads.where(lead_id: leads.pluck(:id))

        respond_to do |format|
          format.json do
            render json: leads, each_serializer: LeadSerializer, account_leads: account_leads
          end
        end
      end
    end
  end
end
