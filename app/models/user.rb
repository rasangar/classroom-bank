class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, :last_name, presence: true

  has_many :current_classbanks, foreign_key:"teacher_id", class_name:"Classbank"
  has_one :bank_account, foreign_key:"student_id", class_name:"BankAccount"
end
