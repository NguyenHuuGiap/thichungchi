class Attachment < ApplicationRecord
  PERMITTED_PARAMS = %i(attachment target_type)
  enum pattern: {top: 0, left: 1}

  mount_uploader :attachment, AttachmentUploader
end
