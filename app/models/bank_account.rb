class BankAccount < ApplicationRecord
  validates :balance, :allowance, numericality: true

  belongs_to :student, class_name:"User"
  belongs_to :classbank
end
