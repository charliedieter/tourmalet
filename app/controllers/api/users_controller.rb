class Api::UsersController < ApplicationController

  def show
    @user = user.find_by(params[:id])
    
    @avatar_url = @user.avatar_url
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

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end
end
