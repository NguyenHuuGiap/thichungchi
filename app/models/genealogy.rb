class Genealogy < ApplicationRecord
  PERMITTED_PARAMS = %i(name gioitinh doithu tucdanh parent_id conong conba sinhnam sinhquan tathe motang biamo kyong image)

  belongs_to :parent, class_name: Category.name, optional: true
  has_many :children, class_name: Category.name, foreign_key: :parent

  mount_uploader :image, ImageGenealogyUploader

  enum gioitinh: {male: "male", female: "female"}
end
