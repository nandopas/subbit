# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#for adding subway stop data
#from: https://gist.github.com/arjunvenkat/1115bc41bf395a162084
require 'csv'

#read in csv file as variable
csv_text = File.read(Rails.root.join('lib', 'seeds', 'Stops.csv'))
#convert csv into something ruby can read
csv = CSV.parse(csv_text, :headers => true, :encoding => 'UTF-8')
#take each row of the file and turn it into a readable hash line by line
csv.each do |row|
 
  row.to_hash

  #puts row['line'].bytes
  #puts row['line']
  #puts row[row.headers.first].bytes
  #puts "There are now #{SubwayStop.count} rows in the transactions table"

  @t = SubwayStop.new
  @t.line = row['line']
  @t.stop = row['stop']
  @t.borough = row['borough']
  @t.structure = row['structure']
  @t.gtfs_latitude = row['gtfs_latitude']
  @t.gtfs_longitude = row['gtfs_longitude']
  #@t.north_direction_label = row['north_direction_label']
  #@t.south_direction_label = row['south_direction_label']
  @t.save
  puts "#{@t.line}, #{@t.stop} saved"

end


#from: https://stackoverflow.com/questions/12984316/rails-database-add-column
#this looks prettier

=begin
CSV.foreach('lib/seeds/Stops.csv', :headers => true) do |row|
  SubwayStop.create!(row.to_hash)
end
=end


#print after running rails db:seed
#puts csv_text