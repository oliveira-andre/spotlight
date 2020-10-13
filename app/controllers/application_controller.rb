# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  before_action :authenticate_user!, unless: -> { request.env['PATH_INFO'] == '/' }

  def after_sign_in_path_for(_resource)
    '/discovery'
  end
end
