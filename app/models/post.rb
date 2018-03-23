class Post < ApplicationRecord
  PERMITTED_PARAMS = %i(title content category_id logo)

  belongs_to :category

  mount_uploader :logo, LogoUploader

  scope :except_id, ->id{where.not id: id}
end
