class HomeController < ApplicationController

  def index
    @category_selected = Category.where.not(position: nil).recent.includes :posts
  end
end
