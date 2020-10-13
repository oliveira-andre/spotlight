# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  rescue_from ServiceException do
    render_error
  end

  before_action :authenticate_user!

  private

  def authenticate_user!
    @current_user = SignInService.new(request.headers['authorization']).execute
  end

  def render_error
    redirect_to root_path
  end
end
