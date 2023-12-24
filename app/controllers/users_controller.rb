# app/controllers/users_controller.rb

class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
  # Other actions...

  def show
    @user = User.find(params[:id])
  end

def create
  @user = User.new(user_params)

  respond_to do |format|
    begin
      if @user.save
        format.json { render json: { message: "User successfully created!" }, status: :created }
      else
        format.json { render json: { error: "Failed to create user", details: @user.errors }, status: :unprocessable_entity }
      end
    rescue => e
      format.json { render json: { error: "Internal Server Error", details: e.message }, status: :internal_server_error }
    end
  end
end

# DELETE /users/:id
  def destroy
    user = User.find(params[:id])
    if user.destroy
      render json: { message: "User successfully deleted." }, status: :ok
    else
      render json: { error: "Failed to delete user." }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render json: { success: true, user: user }
    else
      render json: { success: false, error: 'Invalid email or password' }
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
