class ExamsController < ApplicationController
  before_action :authenticate_user!

  def create
    realm = Realm.find(params[:realm][:id])
    realm_type = RealmType.find(params[:realm_type][:id])
    rank_type = RankType.find(params[:rank_type][:id])
    questions = Question.where realm: realm, realm_type: realm_type
    exam = current_user.exams.create!
    question_specializes(questions, rank_type).each do |q|
      ExamQuestion.create exam: exam, question: q
    end
    redirect_to exam_path(exam)
  end

  def show
    @questions = current_user.exams.working.first.questions
  end

  private
  def question_specializes questions, rank_type
    number_question = rank_type.number_question
    specializes = rank_type.specializes
    specializes_last = specializes.last
    specializes = specializes.first(specializes.length - 1)
    temp = 0
    array = specializes.map do |sp|
      temp += percent_question sp, number_question
      questions.where(specialize_id: sp.id).limit percent_question(sp, number_question)
    end
    arr_tmp = specializes_last.questions.limit(number_question -temp)
    (array + arr_tmp).uniq
  end

  def percent_question sp, number_question
    (number_question.to_f / 100 * sp.percent_rank).to_i
  end
end
