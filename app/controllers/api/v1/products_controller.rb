module Api
  module V1
    class ProductsController < ApplicationController
      before_action :authenticate_user!, only: [:create]

      def create
        product = current_account.products.create(product_params)

        respond_to do |format|
          format.json do
            render json: product
          end
        end
      end

      def product_params
        params.permit(
          :name,
          features: [],
          problemStats: [],
          benefits: [],
          needPayoffStats: []
        )
      end
    end
  end
end
