class GoogleOauthTokensController < ApplicationController
  layout false

  def create
    @auth = request.env['omniauth.auth']['credentials']
    AuthToken.create!(
      email: request.env["omniauth.auth"]['info']['email'],
      access_token: @auth['token'],
      refresh_token: @auth['refresh_token'],
      expires_at: Time.at(@auth['expires_at']).to_datetime
    )
  end
end
