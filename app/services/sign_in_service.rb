# frozen_string_literal: true

class SignInService < ApplicationService
  def initialize(token)
    @token = token&.split(' ')&.last
  end

  def execute
    current_user
  end

  private

  def current_user
    User.find(id)
  rescue ActiveRecord::RecordNotFound
    raise ServiceException.new, t('models.user.errors.not_found')
  end

  def id
    decoded_token.first.with_indifferent_access[:data][:id]
  rescue StandardError
    raise ServiceException.new, t('models.session.errors.invalid_token')
  end

  def decoded_token
    JWT.decode(@token, JWT_SECRET, true, { algorithm: 'HS256' })
  rescue JWT::ExpiredSignature
    raise ServiceException.new, t('models.session.errors.token_expired')
  end
end
