require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app

  get "/auth/google_oauth2/callback", to: "google_oauth_tokens#create"
  get "/auth/linkedin/callback", to: "linkedin_oauth_tokens#create"


  namespace :api do
    namespace :v1 do
      resources :landing_page_contacts
      resources :team_members do
        post :gmail_callback, on: :member
      end
      resources :workflows do
        resources :workflow_attributes, only: [:create]
        resources :sequences, only: [:create]
        resources :linkedin_sequences, only: [:create]
      end
      resources :emails do
        post :cancel, on: :member
        get :opened_email_pixel_url, on: :member
      end
      resources :leads do
        get :logs, on: :member
        resources :account_leads, only: [:create]
      end
      resources :sequences, only: [:index, :show] do
        resources :sequence_steps, only: [:create]

        post :add_leads, on: :member
      end
      resources :linkedin_sequences, only: [:show] do
        resources :linkedin_sequence_steps, only: [:create]

        post :add_leads, on: :member
      end
      resources :lead_sequence_steps do
        post :cancel, on: :member
      end
      resources :sequence_steps, only: [:update]
      resources :workflow_attributes, only: [:update]
      resources :linkedin_sequence_steps, only: [:update]
      resources :lead_imports, only: [:create, :show]
      resources :account_leads, only: [:update, :create]
      resources :sequences, only: [:destroy]
      resources :target_audiences, only: [:show, :update]
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
