Rails.application.routes.draw do


  get 'map/index'
  #resources :admins
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  #resources :votes


  resources :subway_stops do
    resources :posts #do
#      resources :comments
#    end
  end

  resources :posts do
    member do
      put "like", to: "posts#upvote"
      put "dislike", to: "posts#downvote"
    end
  end


  root 'home#index'
  get '/posts', to: 'posts#index' 
  get '/subway_stops/:subway_stop_id/posts', to: 'posts#show' 

  #signing in
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

end
