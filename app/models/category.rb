class Category < ApplicationRecord
  # PERMITTED_PARAMS = %i(name description parent location_categories_attributes: [:id, location_id])
  has_many :posts
  has_many :children, class_name: Category.name, foreign_key: :parent
  has_many :location_categories
  has_many :location, through: :location_categories

  accepts_nested_attributes_for :location_categories

  scope :category_parent, -> {where parent: nil}
end
