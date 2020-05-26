class PostsController < ApplicationController
  
  def index
    #@subway_stop = SubwayStop.find(params[:subway_stop_id])
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      render json: {
        status: :created,
        post: @post
      }
    else
      render json: {
        status: 500,
        errors: @post.errors.full_messages
      }
    end
  end

  def upvote
    puts current_user
    if !!current_user 
      @post = Post.find(params[:id])
      if @post.upvote_by current_user
        puts "up voted"
        render json: {
          status: 200,
          post: @post
        }
      else
        render json: {
          status: 500,
          errors: @post.errors.full_messages
        }
      end
    else
      puts "ruh roh"
      render json: {
        status: 401,
        user: current_user
      }
    end
  end
  
  def downvote
    puts current_user
    if !!current_user 
      @post = Post.find(params[:id])
      if @post.downvote_by current_user
        puts "down voted"
        render json: {
          status: 200,
          post: @post
        }
      else
        render json: {
          status: 500,
          errors: @post.errors.full_messages
        }
      end
    else
      puts "ruh roh"
      render json: {
        status: 401,
        user: current_user
      }
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      puts "deleted post"
      render json: {
        status: 200
      }
    else
      puts "ruh roh not deleted"
      render json: {
        status: 500,
        errors: @post.errors.full_messages
      }
    end
  end

  private
    def post_params
      params.require(:post).permit(:topic, :body, :tags, :subway_stop_id).merge(user_id: current_user.id)
    end
end



=begin
  def show
    @subway_stops = SubwayStop.all
    @subway_stop = SubwayStop.find(params[:subway_stop_id])
    @post = @subway_stop.posts.find(params[:id])
    render json: @post 
    @comment = Comment.new
  end

  def create
    @subway_stop = SubwayStop.find(params[:subway_stop_id])
    if current_user
      @subway_stop = SubwayStop.find(params[:subway_stop_id])
      @post = @subway_stop.posts.create(post_params)
      redirect_to subway_stop_path(@subway_stop)
    else
      #redirect_back(fallback_location: @subway_stop)
      format.html { redirect_to @subway_stop, notice: 'Error with post, was it long enough?' }
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

  
  # def score
  #   @post = Post.find(params[:id])
  #   @post.score = @post.get_upvotes.size - @post.get_downvotes.size
  # end
  

  def destroy
    @subway_stop = SubwayStop.find(params[:subway_stop_id])
    @post = @subway_stop.posts.find(params[:id])
    @post.destroy
    redirect_to subway_stop_path(@subway_stop)
  end
=end
  
