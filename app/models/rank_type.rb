class RankType < ApplicationRecord
  belongs_to :realm_type

  has_many :specializes
end
