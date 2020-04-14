module Api
  module V1
    class CategoriesController < ApplicationController
      def index
        @categories = Category.all
      end
    end
  end
end
