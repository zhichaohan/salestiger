module Api
  module V1
    class TargetAudiencesController < ApplicationController
      before_action :authenticate_user!, only: [:show]

      def show
        target_audience = current_user.account.target_audiences.friendly.find(params[:id])

        respond_to do |format|
          format.json do
            render json: target_audience
          end
        end
      end

      def update
        target_audience = current_user.account.target_audiences.friendly.find(params[:id])

        target_audience.update!(target_audience_params)

        respond_to do |format|
          format.json do
            render json: target_audience
          end
        end
      end

      def target_audience_params
        params.permit(:min_company_size, :max_company_size, industries: [], titles: [])
      end
    end
  end
end
