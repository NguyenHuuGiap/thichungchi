class Admin::UploadImageController < Admin::BaseController
  before_action :load_image, only: [:edit, :update, :destroy]
  before_action :load_image_new, only: [:new, :create]

  def index
    @images = Attachment.where target_type: "Image", pattern: params[:position]
  end

  def new
  end

  def create
    @image.assign_attributes image_params
    if @image.save
      flash[:success] = "Thêm mới thành công"
    else
      flash[:error] = "Thêm mới thất bại"
    end
    redirect_to admin_upload_image_index_path(position: image_params[:pattern])
  end

  def edit
  end

  def update
    @image.assign_attributes image_params
    if @image.save
      flash[:success] = "Cập nhật thành công"
    else
      flash[:error] = "Cập nhật thất bại"
    end
    redirect_to admin_upload_image_index_path(position: image_params[:pattern])
  end

  def destroy
    if @image.destroy
      flash[:success] = "Xóa thành công"
    else
      flash[:error] = "Xóa không thành công"
    end
    respond_to :js
  end

  private
  def load_image
    @image = Attachment.find params[:id]
  end

  def load_image_new
    @image = Attachment.new
  end

  def image_params
    params.require(:attachment).permit(:name, :description, :target_type, :pattern, :attachment)
  end

end
