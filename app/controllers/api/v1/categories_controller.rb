# frozen_string_literal: true

module Api
  module V1
    class CategoriesController < ApplicationController
      before_action :load_categories, only: :index
      before_action :load_category, only: :show

      def index; end

      def show; end

      private

      def load_categories
        @categories = Category.all
      end

      def load_category
        @category = Category.find(params[:id])
      end
    end
  end
end
