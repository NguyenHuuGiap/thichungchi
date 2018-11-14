class Specialize < ApplicationRecord
  belongs_to :rank_type

  has_many :questions
end
