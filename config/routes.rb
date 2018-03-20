Rails.application.routes.draw do
  root "home#index"
  resources :category
  resources :genealogy
end
