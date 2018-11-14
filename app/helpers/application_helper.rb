module ApplicationHelper
  def flash_class level
    case level
    when :notice then "alert-info"
    when :error then "alert-danger"
    when :alert then "alert-warning"
    when :success then "alert-success"
    end
  end

  def image_tag(source, options={})
    source = "IMG_7151.JPG" if source.blank?
    super(source, options)
  end

  def value_selects objects
    objects.map do |object|
      [object.name, object.id]
    end
  end
end
