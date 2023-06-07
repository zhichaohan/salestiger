module Api
  module V1
    class LinkedinSequenceStepsController < ApplicationController
      before_action :authenticate_user!, only: [:create]

      def update
        sequence_step = current_account.linkedin_sequence_steps.find(params[:id])

        sequence_step.update!(
          hours_delay: params[:hours_delay],
          message: params[:message]
        )

        respond_to do |format|
          format.json do
            render json: sequence_step
          end
        end
      end

      def create
        sequence = current_account.linkedin_sequences.find_by(id: params[:linkedin_sequence_id])

        order_index = sequence.linkedin_sequence_steps.count + 1

        sequence_step = sequence.linkedin_sequence_steps.create!(
          order_index: order_index,
          hours_delay: params[:hours_delay],
          message: params[:message]
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
