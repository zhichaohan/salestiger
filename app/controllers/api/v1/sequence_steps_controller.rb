module Api
  module V1
    class SequenceStepsController < ApplicationController
      before_action :authenticate_user!, only: [:create]

      def create
        sequence = Sequence.find_by(id: params[:sequence_id])

        sequence_step = sequence.sequence_steps.create!(
          hours_delay: params[:hours_delay],
          email_subject: params[:email_subject],
          email_template: params[:email_template]
        )

        respond_to do |format|
          format.json do
            render json: sequence_step
          end
        end
      end
    end
  end
end
