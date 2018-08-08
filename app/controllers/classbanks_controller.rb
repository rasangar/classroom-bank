class ClassbanksController < ApplicationController
  before_action :authenticate_user!
  before_action :authenticate_teacher
  def index
  end
  def show
  end
  def new
    @classbank = Classbank.new
  end
  def create
    @classbank = Classbank.new
    @teacher = current_user
    @classbank.teacher = @teacher
    @classbank.name = params[:classbank][:name]
    @class
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
