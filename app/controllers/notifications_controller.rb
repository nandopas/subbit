class NotificationsController < ApplicationController

	def index
		if current_user
		  @unread = Notification.where(user: current_user, seen: false)
		  @notifications = Notification.where(user: current_user)
		  @count = @unread.length
		end
	end

	def update
		@unread = Notification.where(user: current_user, seen: false)
		@unread.each do |unread|
		  unread.update(seen: true)
	    end
	end


end
