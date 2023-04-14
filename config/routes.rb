require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app

  get "/auth/google_oauth2/callback", to: "google_oauth_tokens#create"
  get "/auth/linkedin/callback", to: "linkedin_oauth_tokens#create"


  namespace :api do
    namespace :v1 do
      resources :landing_page_contacts
      resources :team_members
      resources :workflows do
        resources :workflow_attributes, only: [:create]
      end
      resources :emails
      resources :leads do
        get :logs, on: :member
      end
      resources :sequences, only: [:show] do
        resources :sequence_steps, only: [:create]

        post :add_leads, on: :member
      end
    end
  end

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    passwords: 'users/passwords'
  }

  root 'welcome#home'

  match '/', to: 'welcome#home', anchor: false, via: [:get]
end
