class MyInterestsController < ApplicationController
  before_action :set_user, only: [:index, :create]
  before_action :set_interest, only: [:destroy]

  def index
    @interest = Interest.new
    @my_interests = MyInterest.where(user_id: @user)
  end

  def create
    @my_interests = MyInterest.where(user_id: @user)

    interests_params[:interest_ids].reject!(&:empty?).each do |param|
      @similar_interest = Interest.where("name ILIKE ?", param).first
      @similar_interest ||= Interest.create!(name: param)
      @my_interest = MyInterest.new(interest_id: @similar_interest.id, user_id: @user.id)
      authorize @my_interest
      @my_interest.save
    end
    redirect_to profile_path
  end

  def destroy
    authorize @my_interest
    @my_interest.destroy
    redirect_to profile_path
  end

  private

  def interests_params
    params.require(:user).permit(interest_ids: [])
  end

  def set_user
    @user = current_user
  end

  def set_interest
    @my_interest = MyInterest.find(params[:id])
  end
end
