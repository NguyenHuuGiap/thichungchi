class Category < ApplicationRecord
  has_many :posts
  has_many :children, class_name: Category.name, foreign_key: :parent

  enum pattern: {top: 0, top_left: 1, right: 2, left: 3}

  scope :recent, -> {order position: :asc}
  scope :category_parent, -> {where parent: nil}
  scope :category_node, ->array_id{where pattern: array_id}
end
