Rails.application.routes.draw do
  root "home#index"
  resources :plans, except: [:new, :create, :destroy]
end
