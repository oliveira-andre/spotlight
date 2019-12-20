# frozen_string_literal: true

class Category < ApplicationRecord
  has_many :albums

  validates :name, presence: true
  has_one_attached :image

  def artists
    Artist.joins(:albums).where(albums: { id: albums.ids }).distinct
  end

  def songs
    Song.joins(:album).where(albums: { id: albums.ids }).distinct
  end
end
