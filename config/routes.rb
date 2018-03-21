Rails.application.routes.draw do
  root "home#index"
  resources :category do
    resources :post
  end
  resources :genealogy
end
