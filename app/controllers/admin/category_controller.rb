class Admin::CategoryController < Admin::BaseController
  before_action :load_categories, only: [:index, :destroy]
  before_action :load_category_new, only: [:new, :create]
  before_action :load_category, only: [:edit, :update, :destroy, :show]

  def index;end

  def new;end

  def create
    @category.assign_attributes category_params
    if @category.save
      flash[:success] = "Thêm mới thành công"
    else
      flash[:error] = "Thêm mới thất bại"
    end
    redirect_to admin_category_index_path
  end

  def edit
  end

  def update
    @category.assign_attributes category_params
    if @category.save
      flash[:success] = "Cập nhật thành công"
    else
      flash[:error] = "Cập nhật thất bại"
    end
    redirect_to admin_category_index_path
  end

  def destroy
    if @category.destroy
      flash[:success] = "Xóa thành công"
    else
      flash[:error] = "Xóa không thành công"
    end
    respond_to :js
  end

  private
  def load_category
    @category = Category.find_by id: params[:id]
  end

  def load_categories
    @categories = Category.all
  end

  def category_params
    params.require(:category).permit :name, :description, :parent
  end

  def load_category_new
    @category = Category.new
  end
end
