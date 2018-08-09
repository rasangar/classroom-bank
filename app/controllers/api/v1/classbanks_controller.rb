class Api::V1::ClassbanksController < ApplicationController
  before_action :authenticate_user!
  before_action :authenticate_teacher
  protect_from_forgery unless: -> { request.format.json? }


  def index
    @name = current_user.first_name
    @classbanks = current_user.current_classbanks
    result = @classbanks
    render json: result
  end

  protected
  def authenticate_teacher
    if !current_user || current_user.role != 'teacher'
      @access = false
    else
      @access = true
    end
  end
end
