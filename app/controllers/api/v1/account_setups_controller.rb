class Api::V1::AccountSetupsController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create]

  def create
    @student = User.create(email: params[:email], first_name: params[:first_name], last_name: params[:last_name], password: 'password')
    @bank_account = BankAccount.create(student: @student, classbank_id: params[:classbank_id], balance: params[:balance], allowance: params[:allowance])
    @classbank = Classbank.where(id:params[:classbank_id])
    @bank_accounts = BankAccount.where(classbank_id:params[:classbank_id])
    @students = []
    @bank_accounts.each do |account|
       @students<< User.find_by(id:account[:student_id])
    end
    @combined = @students.zip(@bank_accounts)
    if @bank_account.save
      render json: {classbank: @classbank, combine: @combined}
    else
      render :new
    end
  end

end
