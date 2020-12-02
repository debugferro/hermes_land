class CreateMyInterests < ActiveRecord::Migration[6.0]
  def change
    create_table :my_interests do |t|
      t.references :user, null: false, foreign_key: true
      t.references :interest, null: false, foreign_key: true

      t.timestamps
    end
  end
end
