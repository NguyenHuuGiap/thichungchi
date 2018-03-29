class Admin::LocationController < Admin::BaseController
  def index
    @location = Location.public_send(params[:position]).first
    @categories = @location.categories
  end

  def update
    JSON.parse(params[:location][:pattern]).each_with_index do |id, index|
      location_category = load_location_category id
      location_category.update_attributes position: index
      flash[:success] = "Cập nhật thành công vị trí của các item trong menu"
    end
    redirect_to admin_location_index_path(position: params[:position])
  end

  private
  def load_location_category category_id
    @location_category = LocationCategory.find_or_create_by location_id: params[:id], category_id: category_id["id"]
  end
end
