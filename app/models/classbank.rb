class Classbank < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :teacher, class_name:"User"
  has_many :bank_accounts
  has_many :students, through: :bank_accounts
end
