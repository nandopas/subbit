class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :user
      t.string :topic
      t.text :body
      t.references :subway_stop, null: false, foreign_key: true

      t.timestamps
    end
  end
end
