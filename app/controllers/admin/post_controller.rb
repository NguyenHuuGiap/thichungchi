class Admin::PostController < Admin::BaseController
  def index
    @posts = Post.all.includes :category
  end

  def show
    @post = Post.find_by id: params[:id]
    respond_to :js
  end
end
