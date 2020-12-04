class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # TODO: HASMANY RELATIONS TO THE EXTRA FEATURES
  before_save :fix_case_inputs

  NATIVE_LANGUAGES = LanguageList::COMMON_LANGUAGES.map(&:name)
  COUNTRIES        = ISO3166::Country.all.map(&:name).sort

  has_many :my_languages
  has_many :my_interests
  has_many :notifications
  has_many :messages
  has_one_attached :photo
  has_many :posts
  has_many :comments
  has_many :participants
  has_many :interests, through: :my_interests
  has_many :languages, through: :my_languages
  has_many :chat_rooms, through: :participants

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, :last_name,
            presence: true,
            format: { with: /[a-z\s.-]/i },
            length: { minimum: 3, maximum: 15 }
  validates :username, presence: true, format: { with: /\A[A-Za-z0-9_-]*\z/ }
  validates :country, inclusion: { in: COUNTRIES }
  validates :native_language, inclusion: { in: NATIVE_LANGUAGES }

  include PgSearch::Model
  pg_search_scope :global_search,
                  against: [:username, :country, :about_me, :native_language],
                  associated_against: {
                    languages: [:name],
                    interests: [:name]
                  },
                  using: {
                    tsearch: { prefix: true }
                  }
  pg_search_scope :language_search,
                  against: [:native_language],
                  associated_against: {
                    languages: [:name]
                  },
                  using: {
                    tsearch: { prefix: true }
                  }
  pg_search_scope :interest_search,
                  associated_against: {
                    interests: [:name]
                  },
                  using: {
                    tsearch: { prefix: true }
                  }

  def fix_case_inputs
    self.first_name = first_name.capitalize if first_name
    self.last_name  = last_name.capitalize if last_name
    self.username   = username.downcase if username
  end
end
