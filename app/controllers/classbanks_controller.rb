class ClassbanksController < ApplicationController
  before_action :authenticate_user!
  before_action :authenticate_teacher

  def index
    @name = current_user.first_name
    @classbanks = current_user.current_classbanks
  end

  def show
    @classbank = Classbank.find(params[:id])

    @students = @classbank.students

    # testing single wrapper for form
    @account_setup = AccountSetup.new
  end

  def new
    @classbank = Classbank.new
  end

  def create
    @classbank = Classbank.new
    @teacher = current_user
    @classbank.teacher = @teacher
    @classbank.name = params[:classbank][:name]
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
