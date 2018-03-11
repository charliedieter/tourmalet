class Api::ActivitiesController < ApplicationController

  def create
    @activity = Activity.new(activity_params)

    if @activity.save
      render '/api/activities/show'
    else
      render json: @activities.errors.full_messages, status: 422
    end
  end

  def index
    @activities = Activity.all
  end

  def show
    
  end

  def destroy
  end

  private

  def activity_params
    params.require(:activity)
    .permit(:title, :description, :polyline, :athlete_id)
  end

end
