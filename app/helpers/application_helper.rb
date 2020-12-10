module ApplicationHelper
  def message_class(class_name, message, current_user)
    class_name += "-right" if current_user.id == message.user_id
    return class_name
  end
end
