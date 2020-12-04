class Language < ApplicationRecord
  has_many :my_languages

  LANGUAGES = LanguageList::COMMON_LANGUAGES.map(&:name)

  validates :name, inclusion: { in: LANGUAGES }

  # include PgSearch::Model
  # multisearchable against: [:name]
end
