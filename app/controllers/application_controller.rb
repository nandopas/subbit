class ApplicationController < ActionController::Base
  helper_method :current_user, :herd_user, :not_admin

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user = nil
    end
  end
  
  def herd_user
  	if !(current_user)
  	  redirect_to 'subway_stop'
  	end
  end

  def not_admin
    if !(current_user && current_user.admin?)
      redirect_to root_path, fallback_location: root_path, alert: "Pls dont mess with the urls"
      #old, depreciated in new rails
      #session[:return_to] ||= request.referer
      #redirect_to session.delete(:return_to)
    end
  end

end
