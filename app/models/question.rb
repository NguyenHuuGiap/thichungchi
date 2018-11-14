class Question < ApplicationRecord
  belongs_to :specialize

  has_many :answers
  has_many :exam_questions
end
