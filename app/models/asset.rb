class Asset < ApplicationRecord
  has_and_belongs_to_many :avatars
end
