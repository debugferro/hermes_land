class Language < ApplicationRecord
  has_many :user_languages
  LANGUAGES = LanguageList::COMMON_LANGUAGES.map(&:name) 
  validates :name, inclusion: { in: LANGUAGES }
end
