class VotesController < ApplicationController
  
  def create
  	@vote - Vote.new(vote_params)
  	@vote.post = Post.find(params[:post_id])
  	if @vote.save
  	  redirect_to @vote.post
  	else
  	  flash.now[:alert] = "Could not vote (expand on this and why)"
  	end
  end


  private
    def vote_params
      params.require(:vote).permit(:user_id, :post_id)
    end

end
