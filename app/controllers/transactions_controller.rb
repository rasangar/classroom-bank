class TransactionsController < ApplicationController
  def new
    @transaction = Transaction.new
  end

  def create
    transaction_type = params[:type_of_transaction]
    amount = params[:transaction][:amount].to_i
    student = current_user.bank_account
    old_balance = student.balance

    if transaction_type == '1'
      student.balance = old_balance + amount
      Transaction.create(type_of_transaction: transaction_type, student: current_user, bank_account: student, amount: amount)
      student.save
      redirect_to root_path
    else
      student.balance = old_balance - amount
      Transaction.create(type_of_transaction: transaction_type, student: current_user, bank_account: student, amount: -amount)
      student.save
      redirect_to root_path
    end
  end
end
