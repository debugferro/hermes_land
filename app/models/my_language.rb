class MyLanguage < ApplicationRecord
  belongs_to :user
  belongs_to :language

  LEVELS = ["Begginer", "Elementary", "Intermediate", "Advanced", "Fluent"]
  validates :level, presence: true, inclusion: { in: LEVELS }
end
