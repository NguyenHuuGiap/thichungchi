class Admin::LocationController < Admin::BaseController
  def index
    @location = Location.public_send(params[:position]).first
    @categories = @location.categories.category_parent.includes(:children)
  end

  def update
    JSON.parse(params[:location][:pattern]).each_with_index do |params_id, index|
      load_location_category params_id, index
      load_location_category_child params_id["children"], params_id if params_id["children"].present?
      flash[:success] = "Cập nhật thành công vị trí của các item trong menu"
    end
    redirect_to admin_location_index_path(position: params[:position])
  end

  private
  def load_location_category category_id, index
    @location_category = LocationCategory.find_or_create_by location_id: params[:id], category_id: category_id["id"]
    @location_category.update_attributes position: index
    @category = Category.find(category_id["id"]).update_attributes parent: nil
  end

  def load_location_category_child params_child, parent_id
    params_child.each_with_index do |params_id, index|
      @location_category = LocationCategory.find_or_create_by location_id: params[:id], category_id: params_id["id"]
      @location_category.update_attributes position: index
      @category = Category.find(params_id["id"]).update_attributes parent: parent_id["id"]
    end
  end
end
