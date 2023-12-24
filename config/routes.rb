Rails.application.routes.draw do
  ActiveAdmin.routes(self)

  resources :users, only: [:create, :destroy] do
    collection do
      post 'login'
    end
  end
end