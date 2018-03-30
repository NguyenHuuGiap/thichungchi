class Admin::BaseController < ApplicationController
  before_action :authenticate_admin!

  layout "layouts/admin"

  private
end
