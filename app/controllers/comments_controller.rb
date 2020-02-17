class CommentsController < ApplicationController
    
    def index
      @comments = Comment.all
    end

	def create
	  @comment = Comment.new(comment_params)
	  @comment.user_id = current_user.id
	  @post = Post.find(@comment.post_id)
	  if @comment.save
	  	redirect_to subway_stop_post_path(@post.subway_stop_id,@comment.post_id)
	  else
	  	redirect_to root_path
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
