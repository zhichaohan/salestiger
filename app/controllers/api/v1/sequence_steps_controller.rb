module Api
  module V1
    class SequenceStepsController < ApplicationController
      before_action :authenticate_user!, only: [:create]

      def update
        sequence_step = SequenceStep.find(params[:id])

        sequence_step.update!(
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

      def create
        sequence = Sequence.find_by(id: params[:sequence_id])

        order_index = sequence.sequence_steps.count + 1

        sequence_step = sequence.sequence_steps.create!(
          order_index: order_index,
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
