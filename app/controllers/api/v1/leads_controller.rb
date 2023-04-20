module Api
  module V1
    class LeadsController < ApplicationController
      before_action :authenticate_user!, only: [:index, :logs, :create]

      def index
        leads = Lead.preload(:company, lead_sequences: { sequence: :workflow, team_member: {}}).all

        account_leads = current_user.account.account_leads.where(lead_id: leads.pluck(:id))

        respond_to do |format|
          format.json do
            render json: leads,
                   each_serializer: LeadSerializer,
                   account_leads: account_leads,
                   include: Lead.deep_includes
          end
        end
      end

      def show
        lead = Lead.find_by(slug: params[:id])

        respond_to do |format|
          format.json do
            render json: lead, serializer: LeadSerializer, include: { lead_sequences: [:sequence] }
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

      def create
        company = nil
        if params.dig(:company)&.dig(:name).present?
          company = Company.find_or_create_by!(name: params[:company][:name])
        end

        if company.present?
          company.update!(company_params)
        end

        lead = Lead.find_or_create_by!(name: params[:lead][:name], company: company)
        lead.update!(lead_params)

        lead.reload

        respond_to do |format|
          format.json do
            render json: lead, serializer: LeadSerializer
          end
        end
      end

      def company_params
        params.require(:company).permit(
          :num_employees,
          :industry,
          :logo_url,
          :linkedin_url,
          :twitter_url,
          :facebook_url,
          :website_url
        )
      end

      def lead_params
        params.require(:lead).permit(
          :title,
          :business_email,
          :personal_email,
          :phone,
          :location,
          :linkedin_url,
          :twitter_url
        )
      end
    end
  end
end
