class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @realms = Realm.includes realm_types: :rank_types
    @exam = current_user.exams.new
  end
end
