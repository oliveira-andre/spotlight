# frozen_string_literal: true

class RecentlyHeard < ApplicationRecord
  scope :albums, -> { reorder('created_at DESC').limit(8).map(&:album).uniq }

  belongs_to :user
  belongs_to :album
end
