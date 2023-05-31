module Api
  module V1
    class AccountsController < ApplicationController
      before_action :authenticate_user!, only: [:statistics]

      def statistics
        respond_to do |format|
          format.json do
            render json: current_user.account.home_page_statistics
          end
        end
      end

      def emails_sent
        respond_to do |format|
          format.json do
            render json: current_user.account.emails_sent
          end
        end
      end
    end
  end
end
