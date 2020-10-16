# frozen_string_literal: true

class Favorite < ApplicationRecord
  scope :albums, -> { where(favoritable_type: 'Album') }
  scope :songs, -> { where(favoritable_type: 'Song') }
  scope :artists, -> { where(favoritable_type: 'artits') }

  belongs_to :user
  belongs_to :favoritable, polymorphic: true
end
