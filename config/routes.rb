Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :chat_rooms, only: [:index, :show, :create] do
    resources :participants, only: [:create]
    resources :messages, only: [:create]
  end

  resources :interests, only: [:index, :show, :create, :update]

  resources :my_interests, only: [:index, :create, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
