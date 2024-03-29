class Admin::AdminsController < Admin::BaseController
  before_action :load_admin_new, only: [:new, :create]
  before_action :load_admin, only: [:edit, :update, :destroy]

  def index
    @admins = Admin.all
  end

  def new
    @admin = Admin.new
  end

  def create
    @admin = Admin.new
    @admin.assign_attributes admin_params.merge password: Admin::PASSWORD, password_confirmation: Admin::PASSWORD
    if @admin.save
      flash[:success] = "Thêm mới thành công"
    else
      flash[:error] = "Thêm mới thất bại"
    end
    redirect_to admin_admins_path
  end

  def edit
  end

  def update
    @admin.assign_attributes admin_params
    if @admin.save
      flash[:success] = "Cập nhật thành công"
    else
      flash[:error] = "Cập nhật thất bại"
    end
    redirect_to admin_admins_path
  end

  def destroy
    if @admin.destroy
      flash[:success] = "Xóa thành công"
    else
      flash[:error] = "Xóa không thành công"
    end
    respond_to :js
  end

  private
  def load_admin
    @admin = Admin.find(params[:id])
  end

  def admin_params
    params.require(:admin).permit :email, :name, :address, :number_phone, :gender, :birthday
  end
end
