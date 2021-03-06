class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :herd_user, except: [:index, :show, :new, :create]
  #before_action :not_admin, only: [:index]
  # GET /users
  # GET /users.json
  def index
    @users = User.all
    render json: @users.as_json(except: [:email, :password_digest])
=begin
    if current_user 
      @users = User.all
    else
      redirect_back fallback_location: root_path
    end
=end
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])
    @posts = @user.posts.order(created_at: :desc)
    if @user
      render json: @user.as_json(except: [:email, :password_digest], include: :posts)
    else
      render json: {
        status: 500,
        errors: ['user not found']
      }
    end
    #if current_user == User.find(params[:id])
      #@user = User.find(params[:id])
    #else
      #redirect_back fallback_location: root_path, alert: "Pls dont mess with the urls"
    #end
  end

  # GET /users/new
  def new
    if !current_user
      @user = User.new
    else
      redirect_to root_path
    end
  end

  # GET /users/1/edit
=begin
  def edit
    if current_user == User.find(params[:id])
      @user = User.find(params[:id])
    else
      redirect_back fallback_location: root_path, alert: "Pls dont mess with the urls"
    end
  end
=end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = nil
      session[:user_id] = @user.id
      render json: {
        status: :created,
        user: @user
      }
    else
      render json: {
        status: 500,
        errors: @user.errors.full_messages
      }
    end
=begin
    respond_to do |format|
      if @user.save
        UserMailer.with(user: @user).welcome_email.deliver!
        session[:user_id] = nil
        session[:user_id] = @user.id
        format.html { redirect_to root_path, notice: 'You are signed up!' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
=end
  end

=begin
  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'Profile has been updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    session.destroy
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
=end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :username, :password, :password_confirmation, :admin)
    end
end
