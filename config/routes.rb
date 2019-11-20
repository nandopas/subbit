Rails.application.routes.draw do


  resources :subway_stops do
    resources :posts #do
#      resources :comments
#    end
  end

  #root 'subway_stops#index'
  root 'home#index'
  get '/posts', to: 'posts#index' 
  get '/subway_stops/:subway_stop_id/posts', to: 'posts#show' 
  #get 'posts/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
