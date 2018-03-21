class Category < ApplicationRecord
  has_many :news
  has_many :children, class_name: Category.name, foreign_key: :parent

  scope :category_parent, -> {where parent: nil}
  scope :category_node, ->pattern_id{where pattern: pattern_id}
end
