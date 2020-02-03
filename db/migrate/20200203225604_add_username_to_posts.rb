class AddUsernameToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :username, :string
  end
end
