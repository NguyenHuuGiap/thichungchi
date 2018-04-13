class Post < ApplicationRecord
  PERMITTED_PARAMS = %i(title content category_id logo summary pattern)

  belongs_to :category, optional: true

  validates :summary, :title, length: {maximum: 255}, presence: true
  validates :content, presence: true

  mount_uploader :logo, LogoUploader

  scope :except_id, ->id{where.not id: id}
  scope :except_gioithieu, ->{where pattern: nil}
end
