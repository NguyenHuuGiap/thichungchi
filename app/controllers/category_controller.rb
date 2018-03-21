class CategoryController < ApplicationController
  before_action :load_category

  def show
    @posts = @category.posts
  end

  private
  def load_category
    @category = Category.find_by id: params[:id]
  end
end
