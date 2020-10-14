# frozen_string_literal: true

module Api
  module V1
    class SessionsController < ApplicationController
      skip_before_action :authenticate_user!
      before_action :load_user

      def create
        raise ServiceException unless @user.valid_password?(
          session_params[:password]
        )

        render :create, status: :created
      end

      private

      def session_params
        params.require(:session).permit(:email, :password)
      end

      def load_user
        @user = User.find_by(email: session_params[:email])
      end
    end
  end
end
