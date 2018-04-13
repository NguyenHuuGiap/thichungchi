class Admin::PostController < Admin::BaseController
  before_action :load_post, only: [:show, :edit, :update, :destroy]
  before_action :load_posts, only: [:index, :destroy]
  before_action :load_post_new, only: [:new, :create]

  def index
  end

  def show
    render :show
  end

  def new
  end

  def create
    @post.assign_attributes post_params
    if @post.save
      flash[:notice] = "Thêm mới thành công"
    else
      flash[:error] = "Thêm mới không thành công"
    end
    @post.pattern.present? ? redirect_to(admin_gioi_thieu_index_path) : redirect_to(admin_post_index_path)
  end

  def edit
    render :edit
  end

  def update
    @post.assign_attributes post_params
    if @post.save
      flash[:notice] = "Cập nhật thành công"
    else
      flash[:error] = "Cập nhật không thành công"
    end
    @post.pattern.present? ? redirect_to(admin_gioi_thieu_index_path) : redirect_to(admin_post_index_path)
  end

  def destroy
    if @post.destroy
      flash[:success] = "Xóa thành công"
    else
      flash[:error] = "Xóa không thành công"
    end
    respond_to :js
  end
  private
  def load_post_new
    @post = params[:pattern].present? ? Post.new(pattern: params[:pattern]) : Post.new
  end

  def load_post
    @post = Post.find_by id: params[:id]
  end

  def load_posts
    @posts = Post.except_gioithieu.includes :category
  end

  def post_params
    params.require(:post).permit Post::PERMITTED_PARAMS
  end
end
