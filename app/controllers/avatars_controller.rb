class AvatarsController < ApplicationController
  before_action :set_user, only: [:index]

  def index
    @new_avatar = Avatar.new
    @base = @user.avatar.base
    @eye = @user.avatar.eyes
    @hair = @user.avatar.hair
    @mouth = @user.avatar.mouth
    @eyebrow = @user.avatar.eyebrows
    @nose = @user.avatar.nose
  end

  def create

  end

  def edit

  end

  def update

  end

  private

  def avatar_params
    params.require(:avatar).permit(:name, :base, :eyes, :mouth, :hair, :photo)
  end

  def set_user
    @user = current_user
  end
end
