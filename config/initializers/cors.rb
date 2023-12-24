Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'wealthfront-account-creation.vercel.app' # Update this with the actual origin of your React app

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end