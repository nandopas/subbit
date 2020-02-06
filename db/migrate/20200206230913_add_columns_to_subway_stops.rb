class AddColumnsToSubwayStops < ActiveRecord::Migration[6.0]
  def change
  	# add_column table_name, :column_name, :column_type
    add_column :subway_stops, :borough, :string
    add_column :subway_stops, :structure, :string
    add_column :subway_stops, :gtfs_latitude, :float
    add_column :subway_stops, :gtfs_longitude, :float
    add_column :subway_stops, :north_direction_label, :string
    add_column :subway_stops, :south_direction_label, :string
  end
end
