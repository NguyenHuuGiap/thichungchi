Rails.application.routes.draw do
  devise_for :admin, controllers: {sessions: "admin/session"}
  root "home#index"
  resources :category do
    resources :post
  end
  resources :genealogy
  namespace :admin do
    root "category#index"
    resources :category
    resources :admin
    resources :post
    resources :upload_video
    resources :location, only: [:index, :update]
    resources :attachment, only: [:create, :destroy, :index]
  end
end
