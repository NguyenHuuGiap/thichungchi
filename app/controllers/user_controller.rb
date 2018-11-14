class UserController < ActionController::Base
  before_action :load_user_new, only: [:new, :create]
  # before_action :load_admin, only: [:edit, :update, :destroy]
  # def index
  #   @admins = Admin.all
  # end

  def new
  end

  # def create
  #   @admin.assign_attributes admin_params
  #   if @admin.save
  #     flash[:success] = "Thêm mới thành công"
  #   else
  #     flash[:error] = "Thêm mới thất bại"
  #   end
  #   redirect_to admin_admin_index_path
  # end
  #
  # def edit
  # end
  #
  # def update
  #   @admin.assign_attributes admin_params
  #   if @admin.save
  #     flash[:success] = "Cập nhật thành công"
  #   else
  #     flash[:error] = "Cập nhật thất bại"
  #   end
  #   redirect_to admin_admin_index_path
  # end

  # def destroy
  #   if @admin.destroy
  #     flash[:success] = "Xóa thành công"
  #   else
  #     flash[:error] = "Xóa không thành công"
  #   end
  #   respond_to :js
  # end

  private
  # def load_admin
  #   @admin = Admin.find(params[:id])
  # end

  def load_user_new
    @user = User.new
  end

  # def admin_params
  #   params.require(:admin).permit :email, :password
  # end
end
