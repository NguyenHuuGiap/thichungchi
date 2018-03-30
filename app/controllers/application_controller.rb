class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :load_categories, :load_posts

  private
  def load_categories
    @category_parents = Location.top&.first&.categories&.category_parent.includes :children
    @category_lefts = Location.left&.first&.categories.includes :posts
  end

  def load_posts
    @post_news = Post.order(created_at: :desc).limit 10
  end

  def load_attachments
    @post_news = Post.order(created_at: :desc).limit 10
  end

  def after_sign_out_path_for(resource_or_scope)
    admin_root_path
  end
end
