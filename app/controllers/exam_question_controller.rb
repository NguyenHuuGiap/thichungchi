class ExamQuestionController < ApplicationController
  before_action :authenticate_user!

  def update
    binding.pry
  end
end
