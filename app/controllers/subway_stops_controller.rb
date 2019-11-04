class SubwayStopsController < ApplicationController
  def index
    @subway_stops = SubwayStop.all
  end
  
  def show
    @subway_stop = SubwayStop.find(params[:id])
  end

  def new
    @subway_stop = SubwayStop.new
  end
  
  def edit
    @subway_stop = SubwayStop.find(params[:id])
  end
 
  def create 
    @subway_stop = SubwayStop.new(subway_stop_params)
    if  @subway_stop.save
      redirect_to @subway_stop
    else
      render 'new'
    end
  end
  
  def update
    @subway_stop = SubwayStop.find(params[:id])
  
    if @subway_stop.update(subway_stop_params)
      redirect_to @subway_stop
    else
      render 'edit'
    end
  end

  def destroy
    @subway_stop = SubwayStop.find(params[:id])
    @subway_stop.destroy

    redirect_to subway_stops_path
  end

  private
    def subway_stop_params
      params.require(:subway_stop).permit(:line, :stop)
    end
end
