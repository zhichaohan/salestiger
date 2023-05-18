module Api
  module V1
    class LinkedinSequencesController < ApplicationController
      before_action :authenticate_user!, only: [:index, :create]

      def create
        workflow = Workflow.find_by(id: params[:workflow_id])

        sequence = workflow.linkedin_sequences.create!(
          name: params[:name],
          invitation_note: params[:invitation_note]
        )

        sequence.reload

        respond_to do |format|
          format.json do
            render json: sequence
          end
        end
      end

      def show
        sequence = LinkedinSequence.find_by(slug: params[:id])

        respond_to do |format|
          format.json do
            render json: sequence, serializer: LinkedinSequenceSerializer
          end
        end
      end

      def add_leads
        sequence = LinkedinSequence.find(params[:id])
        team_member = TeamMember.find_by(uuid: params[:team_member_id])

        params[:lead_ids].each do |lead_id|
          if sequence.lead_linkedin_sequences.find_by(lead_id: lead_id).blank?
            lead_sequence = sequence.lead_linkedin_sequences.create!(
              lead_id: lead_id,
              team_member: team_member
            )

            Leads::StartLinkedinSequenceWorker.perform_async(lead_sequence.id)
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
