class HomeController < ApplicationController
  before_action :load_categories, :load_news

  def index
  end

  private
  def load_categories
    @categories = Categories.all
  end

  def load_news
    @news = New.all
  end
end
