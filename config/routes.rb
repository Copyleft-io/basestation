Rails.application.routes.draw do
  resources :devices
  resources :networks
  resources :environments
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # You can have the root of your site routed with "root"
  root 'static_pages#home'

  # MATCHED ROUTES
  match '/about', to: "static_pages#about", via: 'get'
  match '/help', to: "static_pages#help", via: 'get'
  match '/dashboard', to: "static_pages#dashboard", via: 'get'

  # RESOURCES
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
