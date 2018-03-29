class Category < ApplicationRecord
  has_many :posts
  has_many :children, class_name: Category.name, foreign_key: :parent
  has_many :location_categories, dependent: :destroy
  has_many :location, through: :location_categories

  scope :category_parent, -> {where parent: nil}
  scope :category_not_parent, -> {where.not parent: nil}
end
