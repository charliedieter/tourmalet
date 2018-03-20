class Api::ImagesController < ApplicationController

  def create
    @image = Image.new(image_params)
    if @image.save
      @activity = Activity.find(image_params[:activity])
      render '/api/activities/show'
    else
      render json: {}, status: 422
    end
  end

  def index
  end

  def destroy
  end

  private

  def image_params
    params.require(:image).permit(:user, :activity, :image)
  end
end
