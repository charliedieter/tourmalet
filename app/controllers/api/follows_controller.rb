class Api::FollowsController < ApplicationController

  def create

    @follow = Follow.new({
      follower_id: params[:followerId],
      followed_id: params[:followedId]
    })
    debugger

    if @follow.save

      @users = User.where(id: [params[:followerId], params[:followedId]])
      @activites = Activity.find_by_athletes_ids([params[:followerId], params[:followedId]])
      render 'api/users/index'

    else
      render json: {}, status: 422
    end
  end


  def destroy

    @follow = Follow.where(followed_id: params[:followedId]).where(follower_id: params[:followed_id] )
    
    @follow.destroy!
    @users = User.where(id: [params[:followerId], params[:followedId]])
    render 'api/users/show'
  end

end
