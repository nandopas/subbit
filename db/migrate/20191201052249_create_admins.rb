class CreateAdmins < ActiveRecord::Migration[6.0]
  def change
    create_table :admins do |t|
      t.string :email
      t.string :username
      t.string :password_digest

      t.timestamps
    end
    add_index :admins, :email, unique: true
    add_index :admins, :username, unique: true
  end
end
