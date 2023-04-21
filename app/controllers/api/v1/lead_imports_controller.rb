module Api
  module V1
    class LeadImportsController < ApplicationController
      before_action :authenticate_user!, only: [:create, :show]

      def create
        lead_import = current_user.lead_imports.create!(lead_import_params)

        lead_import.reload
        lead_import.run!

        respond_to do |format|
          format.json do
            render json: lead_import, serializer: LeadImportSerializer
          end
        end
      end

      def show
        lead_import = LeadImport.find_by(uuid: params[:id])

        lead_import.leads.preload(:company, lead_sequences: { sequence: :workflow, team_member: {}})

        account_leads = current_user.account.account_leads.preload(:last_sent_email).where(lead_id: lead_import.leads.pluck(:id))

        respond_to do |format|
          format.json do
            render json: lead_import,
                   serializer: LeadImportSerializer,
                   account_leads: account_leads,
                   include: { leads: Lead.deep_includes }
          end
        end
      end

      def lead_import_params
        params.permit(:csv_url)
      end
    end
  end
end
