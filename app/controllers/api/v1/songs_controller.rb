# frozen_string_literal: true

module Api
  module V1
    class SongsController < ApplicationController
      def create
        CreateSongService.new(song_params).execute
      end

      private

      def song_params
        params.require(:song).permit(
          :title, :file,
          artist_attributes: %i[name photo],
          album_attributes: %i[title date cover],
          category_attributes: %i[name]
        )
      end
    end
  end
end
