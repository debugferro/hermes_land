class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  def home
    render :user_home if user_signed_in?
  end
end
