Rails.application.routes.draw do
  devise_for :user, controllers: {sessions: "session"}
  devise_for :admin, controllers: {sessions: "admin/session"}
  root "home#index"
  # resources :category do
  #   resources :post
  # end
  # resources :gioi_thieu, only: :index
  resources :fback, only: :index
  resources :exams
  resources :exam_question
  namespace :admin do
    root "category#index"
    resources :category
    resources :genealogy
    resources :admins
    resources :post
    resources :upload_video
    resources :upload_image
    resources :location, only: [:index, :update]
    resources :attachment, only: [:create, :destroy, :index]
    resources :gioi_thieu, only: [:index]
  end
end
