# frozen_string_literal: true

module Api
  module V1
    class DashboardController < ApplicationController
      before_action :load_recent_heard, only: :index
      before_action :load_recommendations, only: :index

      def index; end

      private

      def load_recent_heard
        @recent_albums = current_user.recently_heards
                                     .order('created_at DESC')
                                     .limit(8).map(&:album).uniq
      end

      def load_recommendations
        heard_categories = @recent_albums.map(&:category)
        @recommended_albums = if heard_categories.present?
                                Album.joins(:category, :songs)
                                     .where(category: heard_categories)
                                     .order('songs.played_count')
                                     .select('distinct albums.*')
                                     .limit(12)
                              else
                                @recommended_albums = Album.all.limit(12)
                              end
      end
    end
  end
end
