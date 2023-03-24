OmniAuth.config.full_host = Rails.env.production? ? 'https://www.salestiger.io' : 'http://localhost:3000'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET'], {
  scope: ['email',
    'https://www.googleapis.com/auth/gmail.modify'],
    access_type: 'offline',
    prompt: 'consent'
  }
end
