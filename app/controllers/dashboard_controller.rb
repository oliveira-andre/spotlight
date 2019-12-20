# frozen_string_literal: true

class DashboardController < ApplicationController
  before_action :load_recent_heard, :load_recommendations

  def index; end

  private

  def load_recent_heard
    @recent_albums = current_user.recently_heards.order('created_at DESC')
                                 .limit(4).map(&:album)
  end

  def load_recommendations
    heard_categories = @recent_albums.map(&:category)
    @recommended_albums = Album.joins(:category, :songs).where(
      category: heard_categories
    ).order('songs.played_count').select('distinct albums.*').limit(4)
  end
end
