class ApplicationController < ActionController::Base
  helper_method :current_user, :herd_user

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user = nil
    end
  end
  
  def herd_user
  	if !(current_user && current_user.admin?)
  	  redirect_to controller: 'home', action: 'index'
  	end
  end

end
