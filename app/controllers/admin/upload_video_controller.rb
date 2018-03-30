class Admin::UploadVideoController < Admin::BaseController
  before_action :load_video, only: [:edit, :update, :destroy]
  before_action :load_video_new, only: [:new, :create]

  def index
    @videos = Attachment.where target_type: "Video"
  end

  def new
    debugger
  end

  def create
    @video.assign_attributes video_params
    if @video.save
      flash[:success] = "Thêm mới thành công"
    else
      flash[:error] = "Thêm mới thất bại"
    end
    redirect_to admin_upload_video_index_path
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def load_video
    @video = Attachment.find params[:id]
  end

  def load_video_new
    @video = Attachment.new
  end

  def video_params
    debugger
    params.require(:attachment).permit(:name, :description, :target_type)
  end
end
