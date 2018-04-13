class GioiThieuController < ApplicationController
  def index
    @gioithieu = Post.find_by pattern: "GioiThieu"
  end
end
