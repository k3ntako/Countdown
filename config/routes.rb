Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      get 'events/all', to: 'events#all'
      get 'events/:event_url', to: 'events#globalShow'
      resources :users do
        resources :events, only: [:index, :create, :show]
      end
    end
  end

  root 'homes#index'
  get '/users/:user_id/events/new', to: 'homes#index'
  get '/users/:user_id/events/:event_id', to: 'homes#index'
  get '/:event_id', to: 'homes#index'
end
