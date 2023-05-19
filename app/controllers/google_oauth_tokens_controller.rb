class GoogleOauthTokensController < ApplicationController
  layout false

  def create
    @auth = request.env['omniauth.auth']['credentials']
    token = AuthToken.create!(
      email: request.env["omniauth.auth"]['info']['email'],
      access_token: @auth['token'],
      refresh_token: @auth['refresh_token'],
      expires_at: Time.at(@auth['expires_at']).to_datetime
    )

    team_member = TeamMember.find_by(gmail: request.env["omniauth.auth"]['info']['email'])
    if team_member.present?
      team_member.update!(auth_token: token)
      team_member.reload
      begin
        team_member.setup_gmail_watcher!
      rescue Google::Apis::ClientError => e
        redirect_to "#{team_member.edit_path}?try_again=true"
        return
      end
    end

    if team_member.present?
      redirect_to "#{team_member.show_path}#{m_params}"
      return
    end

    redirect_to root_path
  end
end
