class PostsController < ApplicationController
  
  def index
    @posts = Post.all
  end
  
  def show
    @subway_stop = SubwayStop.find(params[:subway_stop_id])
    @post = @subway_stop.posts.find(params[:id})

  def create
    @subway_stop = SubwayStop.find(params[:subway_stop_id])
    @post = @subway_stop.posts.create(post_params)
    redirect_to subway_stop_path(@subway_stop)
  end

  def destroy
    @subway_stop = SubwayStop.find(params[:subway_stop_id])
    @post = @subway_stop.posts.find(params[:id])
    @post.destroy
    redirect_to subway_stop_path(@subway_stop)
  end
 
  private
    def post_params
      params.require(:post).permit(:user, :topic,  :body)
    end
end
