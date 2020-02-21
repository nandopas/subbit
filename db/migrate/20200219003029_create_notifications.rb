class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.string :message
      t.boolean :seen, default: false
      t.references :user, null: false, foreign_key: true
      t.string :reference_id
      
      t.timestamps
    end
  end
end
