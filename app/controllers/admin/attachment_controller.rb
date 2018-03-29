class Admin::AttachmentController < Admin::BaseController
  skip_before_action :verify_authenticity_token

  def index
    attachments = Attachment.all
    attachment_arr = attachments.map do |attachment|
      {
        url: attachment.attachment.url,
        thumb: attachment.attachment.thumb.url,
        tag: "image",
        id: attachment.id
      }
    end
    render json: attachment_arr
  end

  def create
    @attachment = Attachment.create attachment_params
    render json: {link: @attachment.reload.attachment.url}
  end

  private
  def attachment_params
    params.permit Attachment::PERMITTED_PARAMS
  end
end
