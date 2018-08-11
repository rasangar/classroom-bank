class Transaction < ApplicationRecord
  validates :type_of_transaction, presence: true
  validates :amount, presence: true, numericality: true

  belongs_to :student, class_name:"User"
  belongs_to :bank_account
end
