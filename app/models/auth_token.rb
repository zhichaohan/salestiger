require 'net/http'
require 'json'
require 'googleauth'

class AuthToken < ActiveRecord::Base
  def to_params
    {'refresh_token' => refresh_token,
    'client_id' => ENV['GOOGLE_CLIENT_ID'],
    'client_secret' => ENV['GOOGLE_CLIENT_SECRET'],
    'grant_type' => 'refresh_token'}
  end

  def request_token_from_google
    url = URI("https://accounts.google.com/o/oauth2/token")
    Net::HTTP.post_form(url, self.to_params)
  end

  def refresh!
    puts "refreshing token"
    response = request_token_from_google
    data = JSON.parse(response.body)
    update_attributes(
    access_token: data['access_token'],
    expires_at: Time.now + (data['expires_in'].to_i).seconds)
  end

  def expired?
    expires_at < Time.now
  end

  def fresh_token!
    refresh! if expired?
    access_token
  end

  def as_credentials!
    self.fresh_token!
    self.reload

    Google::Auth::UserRefreshCredentials.new(
     client_id: ENV['GOOGLE_CLIENT_ID'],
     client_secret: ENV['GOOGLE_CLIENT_SECRET'],
     scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/gmail.modify openid',
     access_token: self.access_token,
     refresh_token: self.refresh_token,
     expires_at: self.expires_at,
     grant_type: 'authorization_code'
   )
  end
end
