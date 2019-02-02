Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :events, only: [:index, :create, :show]
      end
    end
  end

  root 'homes#index'
  get '/users/:user_id/events/:event_id', to: 'homes#index'
end
