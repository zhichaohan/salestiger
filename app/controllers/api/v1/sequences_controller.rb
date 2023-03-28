module Api
  module V1
    class SequencesController < ApplicationController
      before_action :authenticate_user!, only: [:index]

      def show
        sequence = Sequence.find_by(slug: params[:id])

        respond_to do |format|
          format.json do
            render json: sequence, serializer: SequenceSerializer
          end
        end
      end
    end
  end
end
