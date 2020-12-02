class MyInterestsController < ApplicationController
  before_action :set_interest, only: [:destroy]

  def index
    @interest = Interest.new
    @my_interests = MyInterest.where(user_id: current_user)
  end

  def create
    @my_interests = MyInterest.where(user_id: current_user)

    interests_params[:interest_ids].reject!(&:empty?).each do |param|
      @similar_interests = Interest.where("name ILIKE ?", param).first
      if @similar_interests.present?
        @my_interest = MyInterest.new(interest_id: @similar_interests.id, user_id: current_user.id)
      else
        @interest = Interest.create!(name: param)
        @my_interest = MyInterest.new(interest_id: @interest.id, user_id: current_user.id)
      end
        @my_interest.save
    end
      redirect_to :my_interests
  end

  def destroy
    @my_interest.destroy
    redirect_to :my_interests
  end

  private

  def interests_params
    params.require(:user).permit(interest_ids: [])
  end

  def set_interest
    @my_interest = MyInterest.find(params[:id])
  end

end
