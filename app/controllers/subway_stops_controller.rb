class SubwayStopsController < ApplicationController
  before_action :not_admin, only: [:edit, :update, :destroy]
  #after_action :log_views, only: [:show]

  #whitelist of stops
  @@ids = [1,2,3,4] 

  def index
=begin
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
=end
    #whitelist of subway stops to show on index
    if current_user && current_user.admin?
      @subway_stops = SubwayStop.all
    else
      @subway_stops = SubwayStop.where(id: @@ids)
    end


  end
  
  def show
    #redirect if user tries to manipulate url id
    #ids = ['309', '168', '18']
    #check if params in whitelist
    if current_user && current_user.admin?
      @subway_stop = SubwayStop.find(params[:id])
    else
      if !(@@ids.map(&:to_s).include? params[:id])
        redirect_to subway_stops_path
      else
        @subway_stop = SubwayStop.find(params[:id])
      end
    end
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
=begin
    def log_views
      @subway_stop.views += 1
    end
=end
end
