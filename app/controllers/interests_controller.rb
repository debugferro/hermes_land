class InterestsController < ApplicationController

  def index
    @interest = Interest.new
    @interest = policy_scope(Interest)
  end

  def show

  end

  def create
    authorize @interest
  end

  def update

  end

  def destroy

  end

  private

  def set_interest
    @interest = Interest.find(params[:id])
    authorize @interest
  end

end
