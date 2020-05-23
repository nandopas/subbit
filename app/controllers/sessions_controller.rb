class SessionsController < ApplicationController

  def new
  end

  def create
    #user = User.find_by_username(params[:username])
    #if user && user.authenticate(params[:password])
    @user = User.find_by(username: session_params[:username])
    puts "achieved finding user"
    if @user && @user.authenticate(session_params[:password])
      puts "passed if"
      session[:user_id] = @user.id
      puts session[:user_id]
      render json: {
        logged_in: true,
        user: @user
      }
      #redirect_to root_url, notice: "Logged in!"
    else
      render json: {
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
      #flash.now[:alert] = "Username or password is invalid"
      #render "new"
    end
    puts session[:user_id]

  end

  def is_logged_in?
    #check this, i think session[:user_id] is redundant
    #puts current_user && current_user.username
    puts session[:user_id]
    puts session[:user_id] ? "y" : "n"
    if !!session[:user_id] && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end

  end

  def destroy
    session[:user_id] = nil
    render json: {
      status: 200,
      logged_out: true
    }
    #redirect_to root_url, notice: "Logged out!"
  end

  private
    def session_params
      params.require(:user).permit(:username, :email, :password)
    end

end
