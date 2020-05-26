Rails.application.routes.draw do
  scope '/api/v1' do

    root 'home#index'
    # subway stops have posts attached to them
    # I only want index and show possible
    # any created/edit is managed by database seeding
    resources :subway_stops, only: [:index, :show] do
      resources :posts
    end

    resources :posts do
      member do
        put "like", to: "posts#upvote"
        put "dislike", to: "posts#downvote"
      end
    end

    # users have posts attached to them
    resources :users do
      resources :posts
    end

    # sign in sign out sign up
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/logged_in', to: 'sessions#is_logged_in?'

  end
  
  # below is a bunch of old routes from pre API days
=begin
  get 'about/index'
  #resources :admins

  resources :users do
    #resources :notifications, only: [:index, :update]
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
=end
end
