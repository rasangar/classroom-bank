class Api::V1::ProfilesController < ApplicationController
  before_action :authenticate_user!

  protect_from_forgery unless: -> { request.format.json? }

  def index
    @student = [current_user]
    @bank_account = [@student[0].bank_account]

    result = @student.zip(@bank_account)
    render json: result
  end

end
