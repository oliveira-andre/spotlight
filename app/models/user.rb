# frozen_string_literal: true

class User < ApplicationRecord
  include BCrypt

  has_secure_password

  has_many :favorites
  has_many :recently_heards

  validates :email, :password, :name, presence: true

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(value)
    @password = Password.create(value)
    self.password_digest = @password
  end

  def valid_password?(password)
    Password.new(password_digest) == password
  end

  def token
    JWT.encode(
      {
        data: {
          id: id,
          name: name,
          email: email
        }
      }, JWT_SECRET, 'HS256'
    )
  end

  def favorite?(kind, id)
    favorites.where(favoritable_type: kind, favoritable_id: id).present?
  end
end
