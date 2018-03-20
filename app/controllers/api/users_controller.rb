class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors, status: 422
    end
  end

  def index
    if params[:query].present?
      @users = User.where('username LIKE ?', "#{params[:query]}%")
      .where('username != ?', current_user.username)
      render '/api/users/index'
    else
      @users = User.none
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end
end
