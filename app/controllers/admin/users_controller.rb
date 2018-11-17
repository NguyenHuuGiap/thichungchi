class Admin::UsersController < Admin::BaseController
  before_action :load_user, only: [:edit, :update, :destroy]

  HEADER = ["Stt", "Email", "Tên", "Giới tính", "Số điện thoại", "Ngày sinh", "Địa chỉ"]

  def index
    @users = User.all
    @user = User.new
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new
    @user.assign_attributes user_params.merge password: User::PASSWORD, password_confirmation: User::PASSWORD
    if @user.save
      flash[:success] = "Thêm mới thành công!"
    else
      flash[:error] = "Thêm mới thất bại!"
    end
    redirect_to admin_users_path
  end

  def edit
  end

  def update
    @user.assign_attributes user_params
    if @user.save
      flash[:success] = "Cập nhật thành công!"
    else
      flash[:error] = "Cập nhật thất bại!"
    end
    redirect_to admin_users_path
  end

  def destroy
    if @user.destroy
      flash[:success] = "Xóa thành công!"
    else
      flash[:error] = "Xóa không thành công!"
    end
    respond_to :js
  end

  def import
    if User.import_file params[:user][:file]
      flash[:success] = "Lưu dữ liệu thành công!"
    else
      flash[:error] = "Lưu dữ liệu không thành công!"
    end
    redirect_to admin_users_path
  end

  def export
    csv = User.export_file HEADER, User.all
    respond_to do |format|
      format.csv{send_data csv, filename: "users_#{Date.current.strftime("%d%m%Y")}.csv"}
    end
  end

  private
  def load_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit :email, :name, :address, :number_phone, :gender, :birthday
  end
end
