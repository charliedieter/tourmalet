class Api::UsersController < ApplicationController

  def show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end