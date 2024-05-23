Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    delete '/users/sign_out' => 'devise/sessions#destroy'
  get '/users/sign_out' => 'devise/sessions#destroy'
  get 'users/about', to: 'pages#about'
  get 'users/staff', to: 'pages#staff'
  get 'users/tracker', to: 'pages#tracker'
  get 'users/index', to: 'pages#index'
  get 'users/pokequiz', to: 'pages#pokequiz'

  root 'home#index'
  get 'home/index'
  get '/about', to: 'pages#about'
  get '/staff', to: 'pages#staff'
  get '/tracker', to: 'pages#tracker'
  get '/index', to: 'pages#index'
  get '/pokequiz', to: 'pages#pokequiz'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
  # Defines the root path route ("/")
  # root "articles#index"
end
