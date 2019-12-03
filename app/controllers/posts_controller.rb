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
    else
      redirect_back(fallback_location: root_path)
    end
  end

  def upvote
    if current_user
      #@subway_stop = SubwayStop.find(params[:subway_stop_id])
      @post = Post.find(params[:id])
      @post.upvote_by current_user
      redirect_back(fallback_location: root_path)
      #redirect to the post itself
      #redirect_to subway_stop_post_path(@post.subway_stop, @post)
    else
      redirect_back(fallback_location: root_path)
    end
  end

  def downvote
    if current_user
      @post = Post.find(params[:id])
      @post.downvote_by current_user
      redirect_back(fallback_location: root_path)
      #redirect_to subway_stops_path
    else
      redirect_back(fallback_location: root_path)
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
      params.require(:post).permit(:user, :topic, :body, :tags).merge(user: current_user.username, user_id: current_user.id)
    end
end

