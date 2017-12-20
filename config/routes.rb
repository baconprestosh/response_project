Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    authenticated :user do
      root :to => 'vehicles#index'
    end
    unauthenticated :user do
      root :to => 'devise/sessions#new'
    end
    root :to => 'vehicles#index'
end

  resources :vehicles, only: [:index, :show, :new, :create]
  resources :technicians, only: [:index, :show, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :vehicles, only: [:index, :show, :new, :create]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :technicians, only: [:index, :show, :new, :create]
    end
  end
end
