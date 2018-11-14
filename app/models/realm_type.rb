class RealmType < ApplicationRecord
  belongs_to :realm

  has_many :rank_types
end
