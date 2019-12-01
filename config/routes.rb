Rails.application.routes.draw do


  resources :users
  resources :sessions, only: [:new, :create, :destroy]


  resources :subway_stops do
    resources :posts#, shallow: true #do
#      resources :comments
#    end
  end

  root 'home#index'
  get '/posts', to: 'posts#index' 
  get '/subway_stops/:subway_stop_id/posts', to: 'posts#show' 

  #signing in
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

end
