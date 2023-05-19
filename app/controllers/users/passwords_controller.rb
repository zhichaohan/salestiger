# frozen_string_literal: true

class Users::PasswordsController < Devise::PasswordsController
  respond_to :json
  skip_before_action :require_no_authentication, only: [:create, :update]

  # GET /resource/password/new
  # def new
  #   super
  # end

  # POST /resource/password
  def create
    self.resource = resource_class.send_reset_password_instructions(resource_params)
    yield resource if block_given?

    if successfully_sent?(resource)
      render :json => { success: true }
      return
    else
      render json: { success: false, errors: resource.errors }
    end
  end

  # GET /resource/password/edit?reset_password_token=abcdef
  # def edit
  #   super
  # end

  # PUT /resource/password
  def update
    if current_user.present?
      current_user.update(password: params[:user][:password])

      sign_in(current_user, bypass: true)
      cookies.signed[:user_id] = current_user.id
      render :json => { success: true, user: UserSerializer.new(current_user) }
      return
    else
      self.resource = resource_class.reset_password_by_token(resource_params)

      yield resource if block_given?

      if resource.errors.empty?
        resource.unlock_access! if unlockable?(resource)
        resource.after_database_authentication
        resource.remember_me!
        sign_in(resource_name, resource)
        cookies.signed[:user_id] = current_user.id
        render :json => { success: true, user: UserSerializer.new(resource) }
        return
      else
        render json: { success: false, errors: resource.errors }
      end
    end
  end

  # protected

  # def after_resetting_password_path_for(resource)
  #   super(resource)
  # end

  # The path used after sending reset password instructions
  # def after_sending_reset_password_instructions_path_for(resource_name)
  #   super(resource_name)
  # end
end
