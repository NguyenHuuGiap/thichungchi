class Admin::PostController < Admin::BaseController
  before_action :load_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all.includes :category
  end

  def show
    respond_to :js
  end

  def edit
    respond_to :js
  end

  private
  def load_post
    @post = Post.find_by id: params[:id]
  end
end
