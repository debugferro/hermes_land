class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.string :description
      t.string :path
      t.boolean :read, default: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
