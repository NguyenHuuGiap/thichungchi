class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :load_categories, :load_posts
  #
  # private
  # def load_categories
  #   @category_parents = Location.top&.first&.categories&.category_parent.includes :children
  #   @category_lefts = Location.left&.first&.categories.includes :posts
  #   @attachments = Attachment.order(created_at: :desc).where target_type: "Video"
  #   @image_tops = Attachment.order(created_at: :desc).where target_type: "Image", pattern: :top
  #   @image_lefts = Attachment.order(created_at: :desc).where target_type: "Image", pattern: :left
  # end
  #
  # def load_posts
  #   @post_news = Post.order(created_at: :desc).limit 10
  # end
  #
  def after_sign_out_path_for(resource_or_scope)
    return admin_root_path if resource_or_scope == :admin
    root_path if resource_or_scope == :user
  end

  protected
  def configure_permitted_parameters
    if params["admin"].present?
      devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation])
      devise_parameter_sanitizer.permit(:sign_in, keys: [:login, :password, :password_confirmation])
      devise_parameter_sanitizer.permit(:account_update, keys: [:email, :password, :password_confirmation, :current_password])
    else
      devise_parameter_sanitizer.permit(:sign_up, keys: [:number_phone, :password, :password_confirmation])
      devise_parameter_sanitizer.permit(:sign_in, keys: [:login, :password, :password_confirmation])
      devise_parameter_sanitizer.permit(:account_update, keys: [:number_phone, :password, :password_confirmation, :current_password])
    end
  end
end
