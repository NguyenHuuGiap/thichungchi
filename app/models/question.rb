class Question < ApplicationRecord
  belongs_to :specialize
  belongs_to :realm
  belongs_to :realm_type

  has_many :answers
  has_many :exam_questions
end
