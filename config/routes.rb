Rails.application.routes.draw do
  devise_for :admins
  root "home#index"
  resources :category do
    resources :post
  end
  resources :genealogy
  namespace :admin do
    root "dashboard#index"
    resources :category
    resources :post
    resources :attachment, only: [:create, :destroy, :index]
  end
end
