class Post < ApplicationRecord
  belongs_to :category

  scope :except_id, ->id{where.not id: id}
end
