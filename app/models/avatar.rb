class Avatar < ApplicationRecord
  belongs_to :user

  has_one_attached :photo
  has_and_belongs_to_many :assets
end
