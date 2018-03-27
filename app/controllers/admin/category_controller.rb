class Admin::CategoryController < Admin::BaseController
  before_action :load_categories, only: [:index, :destroy]
  before_action :load_category_new, only: [:new, :create]

  def index;end

  def new;end

  def create
    debugger
    @category.assign_attributes category_params
    if @category.save
      flash[:success] = "Thêm mới thành công"
    else
      flash[:error] = "Thêm mới thất bại"
    end
    redirect_to admin_category_index_path
  end

  private
  def load_categories
    @categories = Category.all
  end

  def category_params
    params.require(:category).permit :name, :description, :parent, location_categories_attributes: [:id, location_id: []]
  end

  def load_category_new
    @category = Category.new
    @category.location_categories.build
  end
end
