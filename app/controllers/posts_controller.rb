class PostsController < ApplicationController
  
  def index
    #@subway_stop = SubwayStop.find(params[:subway_stop_id])
    @posts = Post.all
  end
  
  def show
    @subway_stop = SubwayStop.find(params[:subway_stop_id])
    @post = @subway_stop.posts.find(params[:id]) 
  end

  def create
    if current_user
      @subway_stop = SubwayStop.find(params[:subway_stop_id])
      @post = @subway_stop.posts.create(post_params)
      redirect_to subway_stop_path(@subway_stop)
    end
  end

  def destroy
    @subway_stop = SubwayStop.find(params[:subway_stop_id])
    @post = @subway_stop.posts.find(params[:id])
    @post.destroy
    redirect_to subway_stop_path(@subway_stop)
  end
 
  private
    def post_params
      params.require(:post).permit(:user, :topic,  :body).merge(user: current_user.username, user_id: current_user.id)
    end
end
