class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def current_account
    current_user.account if current_user.present?
  end
end
