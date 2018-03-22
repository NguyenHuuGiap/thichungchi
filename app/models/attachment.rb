class Attachment < ApplicationRecord
  enum pattern: {video: 0, image: 1, document: 2}
end
