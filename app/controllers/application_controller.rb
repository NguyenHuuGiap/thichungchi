class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :load_categories, :load_posts

  private
  def load_categories
    @category_parents = Category.category_node([:top, nil]).category_parent.includes :children
    @category_node = Category.category_node [:top_left, :right]
    @category_rights = Category.where(pattern: :right).includes :posts
    @category_lefts = Category.where(pattern: :left).includes :posts
  end

  def load_posts
    @post_news = Post.order(created_at: :desc).limit 10
  end

  def load_attachments
    @post_news = Post.order(created_at: :desc).limit 10
  end
end
