class CreateSubwayStops < ActiveRecord::Migration[6.0]
  def change
    create_table :subway_stops do |t|
      t.string :line
      t.string :stop

      t.timestamps
    end
  end
end
