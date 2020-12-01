class UserLanguage < ApplicationRecord
  belongs_to :language
  belongs_to :user

  LEVELS = ["Begginer", "Elementary", "Intermediate", "Advanced", "Fluent"]
  validates :level, presence: true, inclusion: { in: LEVELS }
end
