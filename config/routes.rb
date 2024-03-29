# frozen_string_literal: true

Rails.application.routes.draw do
  concern :favoritable do |options|
    shallow do
      post '/favorite', { to: 'favorites#create', on: :member }.merge(options)
      delete '/favorite', { to: 'favorites#destroy', on: :member }.merge(options)
    end
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :sessions, only: :create
      resources :dashboard, only: :index
      resources :search, only: :index
      resources :categories, only: %i[index show]
      resources :albums, only: :show do
        resources :recently_heards, only: :create
      end
      resources :songs, only: %i[create] do
        concerns :favoritable, favoritable_type: 'Song'
      end
      resources :favorites, only: :index
    end
  end

  root 'home#index'
  get '/*path', to: 'home#index', constraints: ->(req) { req.path !~ /\.(png|jpg|jpeg|js|css|json|mp3)$/ }
end
