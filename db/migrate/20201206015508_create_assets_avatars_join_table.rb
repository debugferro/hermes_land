class CreateAssetsAvatarsJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :assets, :avatars do |t|
      t.index :asset_id
      t.index :avatar_id
    end
  end
end
