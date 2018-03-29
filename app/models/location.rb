class Location < ApplicationRecord
  has_many :location_categories, ->{order position: :asc}, dependent: :destroy
  has_many :categories, through: :location_categories

  enum pattern: {top: 0, left: 1, center: 2}
end
