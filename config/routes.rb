Rails.application.routes.draw do
  ActiveAdmin.routes(self)

  # Define a simple root route for health checks or basic verification
  root to: proc { [200, {}, ["OK"]] }

  resources :users, only: [:create, :destroy] do
    collection do
      post 'login'
    end
  end

  # ... any other routes ...
end