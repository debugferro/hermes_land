class MyLanguagesController < ApplicationController
  before_action :set_user, only: [:index, :create]
  before_action :set_language, only: [:destroy]

  def index
    @my_languages = MyLanguage.where(user_id: @user)
  end

  def create
    @my_languages = MyLanguage.where(user_id: @user)
    languages_params[:language_ids].reject!(&:empty?).each do |param|
      @language = Language.find_by(name: param)

      @my_language = MyLanguage.new(language_id: @language.id, user_id: @user.id, level: "Begginer")
      authorize @my_language
      @my_language.save
    end
    redirect_to profile_path
  end

  def destroy
    authorize @my_language
    @my_language.destroy
    redirect_to profile_path
  end

  private

  def languages_params
    params.require(:user).permit(language_ids: [])
  end

  def set_user
    @user = current_user
  end

  def set_language
    @my_language = MyLanguage.find(params[:id])
  end
end
