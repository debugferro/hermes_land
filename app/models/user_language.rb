class UserLanguage < ApplicationRecord
  belongs_to :language
  belongs_to :user

  LEVELS = ["Begginer", "Elementary", "Intermidiate", "Advanced", "Fluent"]
  validates :level, presence: true, inclusion: { in: LEVELS }
end
