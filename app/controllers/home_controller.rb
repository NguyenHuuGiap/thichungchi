class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @realms = Realm.all
    @realm_types = RealmType.all
    @rank_types = RankType.all
    @exam = current_user.exams.new
  end
end
