class AccountSetupsController < ApplicationController

  def create
    @account_setup = AccountSetup.new(account_params)
    @account_setup.classbank_id = params[:classbank_id]
    if @account_setup.save
      redirect_to classbank_path(params[:classbank_id])
    else
      render :new
    end
  end

  protected

  def account_params
    params.require(:account_setup).permit(:first_name,:last_name, :email, :balance, :allowance)
  end
end
