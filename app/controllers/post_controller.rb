class PostController < ApplicationController
  def show
    @category = Category.find_by id: params[:category_id]
    @post = Post.find_by id: params[:id]
    @relared_posts = @category.posts.except_id(params[:id]).order(created_at: :desc)
  end
end
