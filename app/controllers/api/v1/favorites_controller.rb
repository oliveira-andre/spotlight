# frozen_string_literal: true

module Api
  module V1
    class FavoritesController < ApplicationController
      before_action :load_albums, :load_songs, :load_artists, only: :index
      before_action :load_favoritable, only: :destroy

      def index; end

      def create
        @favoritable = current_user.favorites.create(
          favoritable_type: params[:favoritable_type], favoritable_id: params[:id]
        )
        head :created
      end

      def destroy
        @favoritable.destroy
        head :no_content
      end

      private

      def load_albums
        @favorite_albums = current_user.favorites.albums.map(&:favoritable)
      end

      def load_songs
        @favorite_songs = current_user.favorites.songs.map(&:favoritable)
      end

      def load_artists
        @favorite_artists = current_user.favorites.artists.map(&:favoritable)
      end

      def load_favoritable
        @favoritable = current_user.favorites.find_by(
          favoritable_type: params[:favoritable_type], favoritable_id: params[:id]
        )
      end
    end
  end
end
