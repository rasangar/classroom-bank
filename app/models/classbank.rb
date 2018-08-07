class Classbank < ApplicationRecord
  validates :classname, presence: true, uniqueness: true

  belongs_to :teacher, class_name:"User"
end
