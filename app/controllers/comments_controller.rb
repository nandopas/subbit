class CommentsController < ApplicationController
    
    def index
      @comments = Comment.all
    end

	def create
	  @comment = Comment.new(comment_params)
	  @comment.user_id = current_user.id
	  @post = Post.find(@comment.post_id)
    if @post.user_id != current_user.id
      @notification = Notification.create(user_id: @post.user_id, message: "#{@comment.user.username} commented '#{@comment.comment}' on your post: #{@post.topic}, ", reference_id: @post.id)
    end
	  if @comment.save
	  	redirect_to subway_stop_post_path(@post.subway_stop_id,@comment.post_id)
	  else
	  	redirect_to root_path
	  end 
	end
  
  def upvote
    if current_user
      #@subway_stop = SubwayStop.find(params[:subway_stop_id])
      @comment = Comment.find(params[:id])
      @comment.upvote_by current_user
      redirect_back(fallback_location: root_path)
      #redirect to the post itself
      #redirect_to subway_stop_post_path(@post.subway_stop, @post)
    else
      redirect_back(fallback_location: root_path)
    end
  end

  def downvote
    if current_user
      @comment = Comment.find(params[:id])
      @comment.downvote_by current_user
      redirect_back(fallback_location: root_path)
      #redirect_to subway_stops_path
    else
      redirect_back(fallback_location: root_path)
    end
  end

    def destroy
      @comment = Comment.find(params[:id])
      @post = Post.find(@comment.post_id)
      @comment.destroy
      redirect_to subway_stop_post_path(@post.subway_stop_id,@comment.post_id)
    end

	private
      def comment_params
        params.require(:comment).permit(:comment, :post_id)
      end

end
