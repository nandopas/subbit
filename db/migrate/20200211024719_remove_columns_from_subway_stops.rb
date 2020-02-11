class RemoveColumnsFromSubwayStops < ActiveRecord::Migration[6.0]
  def change
  	remove_column :subway_stops, :north_direction_label, :string
    remove_column :subway_stops, :south_direction_label, :string
  end
end
