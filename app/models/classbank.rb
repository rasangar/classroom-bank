class Classbank < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :teacher, class_name:"User"
end
