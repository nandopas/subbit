class AboutController < ApplicationController
  def index
  	@columbia = SubwayStop.find_by stop: "116 St - Columbia University"
  	@nyu = SubwayStop.find_by stop: "W 4 St - NYU/Washington Square Park"
  	@soho = SubwayStop.find_by stop: "Prince St"
  	@us = SubwayStop.find_by stop: "14 St - Union Sq"
  end
end
