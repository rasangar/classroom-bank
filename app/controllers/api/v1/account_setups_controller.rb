class Api::V1::AccountSetupsController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create]

  def create
    @student = User.create(email: params[:email], first_name: params[:first_name], last_name: params[:last_name], password: 'password')
    @bank_account = BankAccount.create(student: @student, classbank_id: params[:classbank_id], balance: params[:balance], allowance: params[:allowance])

    if @bank_account.save
      redirect_to classbank_path(params[:classbank_id])
    else
      render :new
    end
  end

end
