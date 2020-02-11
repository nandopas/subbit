class RemoveUsernameFromPosts < ActiveRecord::Migration[6.0]
  def change
  	remove_column :posts, :username, :string
  end
end
