Rails.application.routes.draw do

  get 'about/index'
  #resources :admins

  resources :users do
    resources :notifications, only: [:index, :update]
    resources :posts
  end


  resources :sessions, only: [:new, :create, :destroy]
  #resources :votes


  resources :subway_stops do
    resources :posts #do
      #resources :comments
    #end
  end
  
  resources :comments, only: [:create, :destroy] do
    member do
      put "like", to: "comments#upvote"
      put "dislike", to: "comments#downvote"
    end
  end

  resources :posts do
    member do
      put "like", to: "posts#upvote"
      put "dislike", to: "posts#downvote"
    end
  end

  root 'subway_stops#index'
  #root 'home#index'
  #get 'users/:user_id/posts', to: 'posts#index' 
  #get '/subway_stops/:subway_stop_id/posts', to: 'posts#show' 

  #signing in
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

end
