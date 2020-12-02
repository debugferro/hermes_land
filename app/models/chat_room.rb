class ChatRoom < ApplicationRecord
  has_many :participants, dependent: :destroy
  has_many :users, through: :participants
  has_many :messages
end
