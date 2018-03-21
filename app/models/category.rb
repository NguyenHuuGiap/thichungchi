class Category < ApplicationRecord
  has_many :posts
  has_many :children, class_name: Category.name, foreign_key: :parent

  scope :recent, -> {order position: :asc}
  scope :category_parent, -> {where parent: nil}
  scope :category_node, ->pattern_id, id{where "pattern = ? OR pattern = ?", pattern_id, id}
end
