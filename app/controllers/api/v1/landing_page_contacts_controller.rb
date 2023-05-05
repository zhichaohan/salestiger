module Api
  module V1
    class LandingPageContactsController < ApplicationController
      def create
        contact = LandingPageContact.create!(landing_page_contact_params)

        contact.notify_slack!
        
        respond_to do |format|
          format.json do
            render json: { contact: contact }
          end
        end
      end

      def landing_page_contact_params
        params.permit(
          :first_name,
          :last_name,
          :email,
          :company_name,
          :extra_info
        )
      end
    end
  end
end
