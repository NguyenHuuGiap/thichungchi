class Admin::GioiThieuController < Admin::BaseController
  def index
    @gioithieu = Post.find_by pattern: "GioiThieu"
  end
end
