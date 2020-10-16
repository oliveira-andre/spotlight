# frozen_string_literal: true

module Api
  module V1
    class DashboardController < ApplicationController
      before_action :load_recent_albums, only: :index
      before_action :load_recommendations, only: :index

      def index; end

      private

      def load_recent_albums
        @recent_albums = @current_user.recently_heards.albums
      end

      def load_recommendations
        heard_categories = @recent_albums.map(&:category)
        @recommended_albums = if heard_categories.present?
                                Album.joins(:category, :songs).where(category: heard_categories)
                                     .order('songs.played_count').select('albums.*').limit(12)
                              else
                                @recommended_albums = Album.all.limit(12)
                              end
      end
    end
  end
end
