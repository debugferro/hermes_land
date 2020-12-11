module ApplicationHelper
  def message_class(class_name, message, current_user)
    class_name += "-right" if current_user.id == message.user_id
    return class_name
  end

  def show_svg(path)
    File.open("app/assets/images/#{path}", "rb") do |file|
      raw file.read
    end
  end
end
