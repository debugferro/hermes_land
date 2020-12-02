class Interest < ApplicationRecord
  has_many :my_interests
  before_save :fix_case_inputs

  def fix_case_inputs
    self.name = name.capitalize if name
  end
end
