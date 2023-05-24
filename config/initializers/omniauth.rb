OmniAuth.config.full_host = Rails.env.production? ? 'https://www.salestiger.io' : 'http://localhost:3000'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET'], {
  scope: ['email', 'https://www.googleapis.com/auth/gmail.send', 'https://www.googleapis.com/auth/gmail.readonly'],
    access_type: 'offline',
    prompt: 'consent'
  }
  provider :linkedin, ENV['LINKEDIN_CLIENT_ID'], ENV['LINKEDIN_CLIENT_SECRET'], {
    token_params: {
      client_id: ENV['LINKEDIN_CLIENT_ID'],
      client_secret: ENV['LINKEDIN_CLIENT_SECRET']
    }
    # scope: 'w_compliance' they don't have any scopes that are of interest
  }
end
