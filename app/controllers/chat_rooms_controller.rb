class ChatRoomsController < ApplicationController
  before_action :set_present_chats, only: [:index]
  before_action :fix_params, only: [:create]
  before_action :set_user
  before_action :set_present_chats, only: [:create, :show, :index]

  def index
    # Where it is going to display all chatrooms for current user
    @new_chat = ChatRoom.new
    authorize @new_chat
  end

  def show
    @chat_room = ChatRoom.find(params[:id])
    authorize @chat_room
    @participants = @chat_room.users
    @messages = @chat_room.messages
    @new_message = Message.new
    @user = current_user
  end

  def create
    @found_users = []
    @user_params = params[:chat_room][:user_ids]
    @user_params.each do |user_param|
      if number?(user_param)
        @found_users << User.find(user_param).id
      else
        @found_users << User.where(username: user_param).first.id
      end
    end
    @found_users << current_user.id
    user_ids = @found_users.map(&:to_i)
    @chatrooms = ChatRoom.joins(:participants).group('chat_rooms.id').having('ARRAY[?::bigint] = ARRAY_AGG(participants.user_id ORDER BY participants.user_id ASC)', user_ids.sort)
    if @chatrooms.any?
      redirect_to @chatrooms.first
    else
      @chat = ChatRoom.create
      user_ids.each do |user_id|
        Participant.create!(user_id: user_id, chat_room_id: @chat.id)
      end
      redirect_to @chat
    end
  end

  def destroy
    # It will destroy a MULTIPLE chatroom only
  end

  private

  def set_present_chats
    @present_chats = []
    Participant.where(user_id: current_user).each do |participant|
      @present_chats << participant.chat_room
    end
  end

  def fix_params
    params[:chat_room][:user_ids].reject!(&:empty?)
  end

  def set_user
    @user = current_user
  end

  def chat_room_params
    params.require(:chat_room).permit(user_ids: [])
  end

  def number?(string)
    true if Float(string) rescue false
  end
end
