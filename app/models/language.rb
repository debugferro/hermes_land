class Language < ApplicationRecord
  has_many :user_languages
  has_many :languages
end
