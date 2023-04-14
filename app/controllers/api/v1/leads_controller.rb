module Api
  module V1
    class LeadsController < ApplicationController
      before_action :authenticate_user!, only: [:index, :logs]

      def index
        leads = Lead.preload(:company).all

        account_leads = current_user.account.account_leads.where(lead_id: leads.pluck(:id))

        respond_to do |format|
          format.json do
            render json: leads,
                   each_serializer: LeadSerializer,
                   account_leads: account_leads,
                   include: { lead_sequences: [:sequence], company: {} }
          end
        end
      end

      def show
        lead = Lead.find_by(slug: params[:id])

        respond_to do |format|
          format.json do
            render json: lead, serializer: LeadSerializer
          end
        end
      end

      def logs
        lead = Lead.find_by(slug: params[:id])

        respond_to do |format|
          format.json do
            render json: lead.logs(current_user.account_id)
          end
        end
      end

      def start_sequence
        Leads::StartSequenceWorker.perform_async(params[:lead_id], params[:sequence_id])

        respond_to do |format|
          format.json do
            render json: { success: true }
          end
        end
      end
    end
  end
end
