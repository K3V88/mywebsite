Rails.application.routes.draw do
  root 'pages#index'
  get 'pages/index'
  get '/about', to: 'pages#about'
  get '/staff', to: 'pages#staff'
  get '/tracker', to: 'pages#tracker'
  get '/index', to: 'pages#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
