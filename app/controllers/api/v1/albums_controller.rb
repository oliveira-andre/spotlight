# frozen_string_literal: true

module Api
  module V1
    class AlbumsController < ApplicationController
      before_action :load_album

      def show; end

      private

      def load_album
        @album = Album.find(params[:id])
      end
    end
  end
end
