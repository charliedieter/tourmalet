class Api::UsersController < ApplicationController

  def show

    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      @image = image_url :avatar.url(:medium)
      render '/api/users/show'
    else
      render json: @user.errors, status: 422
    end
  end

  def index
    @users = User.all
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end
end
