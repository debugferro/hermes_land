class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  before_save :fix_case_inputs

  has_many :my_languages
  has_many :my_interests
  has_many :notifications
  has_many :messages
  # TODO: HASMANY RELATIONS TO THE EXTRA FEATURES
  has_many :posts
  has_many :comments
  has_many :interests, through: :my_interests
  has_many :languages, through: :my_languages
  has_many :chat_rooms, through: :participants

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  COUNTRIES = ISO3166::Country.all.map(&:name).sort

  validates :first_name, :last_name,
            presence: true,
            format: { with: /[a-z\s.-]/i },
            length: { minimum: 3, maximum: 15 }
  validates :username, presence: true, format: { with: /\A[A-Za-z0-9_-]*\z/ }
  validates :country, inclusion: { in: COUNTRIES }
  validates :language_id, presence: true

  def fix_case_inputs
    self.first_name = first_name.capitalize if first_name
    self.last_name = last_name.capitalize if last_name
    self.username = username.downcase if username
  end
end
