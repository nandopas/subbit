class SubwayStopsController < ApplicationController
  before_action :not_admin, only: [:edit, :update, :destroy]

  def index
    if (params[:filter] == 'M')
      @subway_stops = SubwayStop.where(borough: 'M')
    elsif (params[:filter] == 'Bk')
      @subway_stops = SubwayStop.where(borough: 'Bk')
    elsif (params[:filter] == 'Bx')
      @subway_stops = SubwayStop.where(borough: 'Bx')
    elsif (params[:filter] == 'Q')
      @subway_stops = SubwayStop.where(borough: 'Q')
    elsif (params[:filter] == 'SI')
      @subway_stops = SubwayStop.where(borough: 'SI')
    #@subway_stops = SubwayStop.search(params[:search])
    else
      @subway_stops = SubwayStop.search(params[:search])
    end

  end
  
  def show
    @subway_stop = SubwayStop.find(params[:id])
  end

  def new
    if current_user
      @subway_stop = SubwayStop.new
    else
      session[:return_to] ||= request.referer
      redirect_to session.delete(:return_to)
    end
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
      params.require(:subway_stop).permit(:line, :stop, :borough, :structure, :gtfs_latitude, :gtfs_longitude, :north_direction_label, :south_direction_label, :search, :filter)
    end
end
