class AccountSetup
  include ActiveModel::Model

  attr_accessor :first_name, :last_name, :email, :balance, :allowance, :classbank_id

  def save
    return false if invalid?

    ActiveRecord::Base.transaction do
      student = User.create!(first_name: first_name, last_name: last_name, email: email, password: "password")
      student.create_bank_account!(classbank_id: classbank_id, balance: balance, allowance: allowance)
    end

    true
  rescue ActiveRecord::StatementInvalid => e
    # Handle exception that caused the transaction to fail
    # e.message and e.cause.message can be helpful
    errors.add(:base, e.message)

    false
  end
end
