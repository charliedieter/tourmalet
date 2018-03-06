class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_creds(
      params[:user][:username],
      params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: ['Invalid Credential']
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render status: 404
    end
  end
end
