class Attachment < ApplicationRecord
  PERMITTED_PARAMS = %i(attachment)
  enum pattern: {video: 0, image: 1, document: 2}

  mount_uploader :attachment, AttachmentUploader
end
