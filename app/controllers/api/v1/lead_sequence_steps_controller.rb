module Api
  module V1
    class LeadSequenceStepsController < ApplicationController
      before_action :authenticate_user!, only: [:create]

      def cancel
        step = LeadSequenceStep.find_by(id: params[:id])

        step.cancel!

        respond_to do |format|
          format.json do
            render json: step
          end
        end
      end
    end
  end
end
