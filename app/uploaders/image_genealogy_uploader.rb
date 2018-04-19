class ImageGenealogyUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  include Cloudinary::CarrierWave

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def size_range
    1..5.megabytes
  end

  version :thumb do
    process resize_to_fill: [200,200]
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end
end
