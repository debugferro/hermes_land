class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :interests
  has_many :user_languages
  has_many :languages, through: :user_languages
  has_many :notifications
  has_many :messages
  has_many :chat_rooms, through: :participants
  # TODO: HASMANY RELATIONS TO THE EXTRA FEATURES
  has_many :posts
  has_many :comments
  belongs_to :language

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  COUNTRIES = ISO3166::Country.all.map(&:name)

  validates :first_name, :last_name,
            presence: true,
            format: { with: /[a-z\s.-]/i },
            length: { minimum: 3, maximum: 15 }
  validates :username, presence: true#, format: { with: /\A[A-Za-z0-9_-]*\z/ }
  validates :country, inclusion: { in: COUNTRIES }
  validates :language_id, presence: true
end
