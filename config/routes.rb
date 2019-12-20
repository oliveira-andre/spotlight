# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    resources :favorites, only: :index
    root to: 'dashboard#index', as: :authenticated_root
    resources :search, only: %i[index new], as: :searches
    resources :categories, only: :show
    resources :artists, only: :show
    resources :albums, only: :show do
      resources :recently_heards, only: :create
    end
    resources :songs, only: [] do
      post '/favorite', to: 'favorites#create', on: :member,
                        defaults: { format: :js, favoritable_type: 'Song' }
      delete '/favorite', to: 'favorites#destroy', on: :member,
                          defaults: { format: :js, favoritable_type: 'Song' }
    end
  end

  unauthenticated :user do
    root to: 'home#index'
  end
end
