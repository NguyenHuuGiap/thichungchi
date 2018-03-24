class Admin::PostController < Admin::BaseController
  before_action :load_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all.includes :category
  end

  def show
    render :show
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
    redirect_to admin_post_index_path
  end

  private
  def load_post
    @post = Post.find_by id: params[:id]
  end

  def post_params
    params.require(:post).permit Post::PERMITTED_PARAMS
  end
end
