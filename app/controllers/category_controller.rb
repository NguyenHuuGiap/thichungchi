class CategoryController < ApplicationController
  before_action :load_category

  def show
    @posts = @category.posts&.order(created_at: :desc)
  end

  private
  def load_category
    @category = Category.find_by id: params[:id]
  end
end
