class HomeController < ApplicationController
  before_action :load_categories, :load_news

  def index
  end

  private
  def load_categories
    @category_parents = Category.category_node(0).category_parent.includes :children
    @category_node = Category.category_node(1)
  end

  def load_news
    @news = New.all
  end
end
