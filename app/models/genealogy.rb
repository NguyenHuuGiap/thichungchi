class Genealogy < ApplicationRecord
  belongs_to :parent, class_name: Category.name, optional: true
  has_many :children, class_name: Category.name, foreign_key: :parent

  enum gioitinh: {male: 0, female: 1}
end
