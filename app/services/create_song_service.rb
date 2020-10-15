# frozen_string_literal: true

class CreateSongService < ApplicationService
  def initialize(params)
    @song_params = params
    @artist_params = params[:artist_attributes]
    @album_params = params[:album_attributes]
    @category_params = params[:category_attributes]
  end

  def execute
    Song.transaction do
      build_album
      @song = Song.create!(song_params)
      @song.file.attach(@song_params[:file])
    end
  end

  private

  def song_params
    { title: @song_params[:title], album_id: @album.id }
  end

  def build_album
    build_category_and_artist
    @album = Album.find_or_create_by!(album_params)
    @album.cover.attach(@album_params[:cover])
  end

  def album_params
    { title: @album_params[:title], date: @album_params[:date] }.merge(
      category_id: @category.id,
      artist_id: @artist.id
    )
  end

  def build_category_and_artist
    @category = Category.find_or_create_by!(category_params)
    @artist = Artist.find_or_create_by!(artist_params)
    @artist.photo.attach(@artist_params[:photo])
  end

  def category_params
    { name: @category_params[:name] }
  end

  def artist_params
    { name: @artist_params[:name] }
  end
end
