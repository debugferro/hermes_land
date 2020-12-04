class AddNativeLanguageToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :native_language, :string
  end
end
