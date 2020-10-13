# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favorites
  has_many :recently_heards

  validates :email, :password, :name, presence: true

  def favorite?(kind, id)
    favorites.where(favoritable_type: kind, favoritable_id: id).present?
  end
end
