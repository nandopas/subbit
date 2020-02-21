class Notification < ApplicationRecord
	belongs_to :user

	def self.count(user)
		unread = Notification.where(user: user, seen: false)
		#notifications = Notification.where(user: current_user)
		count = unread.length
		return count
	end
end
