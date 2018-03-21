class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :load_categories, :load_posts

  private
  def load_categories
    @category_parents = Category.category_node(0, nil).category_parent.includes :children
    @category_node = Category.category_node(1, 2)
    @category_right = Category.find_by pattern: 2
  end

  def load_posts
    @post_news = Post.order(created_at: :desc).limit 10
  end
end
