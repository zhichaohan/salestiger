module Api
  module V1
    class LeadsController < ApplicationController
      before_action :authenticate_user!, only: [:index]

      def index
        leads = Lead.preload(:company).all

        respond_to do |format|
          format.json do
            render json: leads, each_serializer: LeadSerializer
          end
        end
      end
    end
  end
end
