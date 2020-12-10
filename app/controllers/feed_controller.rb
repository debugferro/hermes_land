class FeedController < ApplicationController

  def index
    @users = User.all
    unless current_user.photo.attached?
      redirect_to avatars_path
    end
  end
end
