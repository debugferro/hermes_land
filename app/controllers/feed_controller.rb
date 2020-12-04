class FeedController < ApplicationController

  def index
    @users = User.all
  end
end
