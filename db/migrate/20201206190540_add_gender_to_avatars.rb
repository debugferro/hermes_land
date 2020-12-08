class AddGenderToAvatars < ActiveRecord::Migration[6.0]
  def change
    add_column :avatars, :gender, :string, default: "f"
  end
end

