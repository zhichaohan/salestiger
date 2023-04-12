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

      def add_leads
        sequence = Sequence.find(params[:id])
        team_member = TeamMember.find_by(uuid: params[:team_member_id])

        params[:lead_ids].each do |lead_id|
          if sequence.lead_sequences.find_by(lead_id: lead_id).blank?
            lead_sequence = sequence.lead_sequences.create!(
              lead_id: lead_id,
              team_member: team_member
            )

            Leads::StartSequenceWorker.perform_async(lead_sequence.id)
          end
        end

        respond_to do |format|
          format.json do
            render json: { success: true }
          end
        end
      end
    end
  end
end
