module Api
  module V1
    class CategoriesController < ApplicationController
      before_action :load_categories

      def index; end

      private

      def load_categories 
        @categories = Category.all
      end
    end
  end
end