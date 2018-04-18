class Admin::GenealogyController < Admin::BaseController
  before_action :load_genealogies, only: [:index, :new, :create, :edit, :update]
  before_action :load_genealogy_new, only: [:new, :create]
  before_action :load_genealogy, only: [:edit, :update, :destroy, :show]
  def index;end

  def show
    respond_to :js
  end

  def new;end

  def create
    @genealogy.assign_attributes genealogy_params
    if @genealogy.save
      flash[:success] = "Thêm mới thành công"
    else
      flash[:error] = "Thêm mới thất bại"
    end
    redirect_to admin_genealogy_index_path
  end

  def edit;end

  def update
    @genealogy.assign_attributes genealogy_params
    if @genealogy.save
      flash[:success] = "Cập nhật thành công"
    else
      flash[:error] = "Cập nhật thất bại"
    end
    redirect_to admin_genealogy_index_path
  end

  def destroy
    if @genealogy.destroy
      flash[:success] = "Xóa thành công"
    else
      flash[:error] = "Xóa không thành công"
    end
    respond_to :js
  end

  private
  def genealogy_params
    params.require(:genealogy).permit Genealogy::PERMITTED_PARAMS
  end

  def load_genealogies
    @genealogies = Genealogy.all
  end

  def load_genealogy_new
    @genealogy = Genealogy.new
  end

  def load_genealogy
    @genealogy = Genealogy.find_by id: params[:id]
  end

end
