class AvatarsController < ApplicationController
  before_action :set_user, only: [:index]

  def index
    @new_avatar = Avatar.new
    @base = @user.avatar.assets.where(category: "base").first.path
    @eye = @user.avatar.assets.where(category: "eyes").first.path
    @hair = @user.avatar.assets.where(category: "hair").first.path
    @mouth = @user.avatar.assets.where(category: "mouth").first.path
    @eyebrow = @user.avatar.assets.where(category: "eyebrows").first.path
    @nose = @user.avatar.assets.where(category: "nose").first.path
    @accesory = @user.avatar.assets.where(category: "acessory").first&.path
    @cloth = @user.avatar.assets.where(category: "cloth").first&.path

    @bases = write_paths(Asset.where(category: "base"))
    @eyes = write_paths(Asset.where(category: "eyes"))
    @hairs = write_paths(Asset.where(category: "hair"))
    @mouths = write_paths(Asset.where(category: "mouth"))
    @eyebrows = write_paths(Asset.where(category: "eyebrows"))
    @noses = write_paths(Asset.where(category: "nose"))
    @acessories = write_paths(Asset.where(category: "acessory"))
    @clothes = write_paths(Asset.where(category: "cloth"))
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

  def write_paths(assets)
    assets.map { |asset| asset.path }
  end
end
