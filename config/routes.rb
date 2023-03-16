require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app

  namespace :api do
    namespace :v1 do
      resources :landing_page_contacts
      resources :team_members
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
