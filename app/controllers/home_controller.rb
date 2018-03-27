class HomeController < ApplicationController

  def index
    @category_selected = Location.center&.first&.categories&.includes :posts
  end
end
