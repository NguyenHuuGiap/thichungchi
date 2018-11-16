class Exam < ApplicationRecord
  belongs_to :user

  has_many :exam_questions
  has_many :questions, through: :exam_questions

  enum status: {working: 1, finish: 2}
end
