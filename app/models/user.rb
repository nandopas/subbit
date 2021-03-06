class User < ApplicationRecord
  acts_as_voter
  has_secure_password
  has_many :posts
  has_many :subway_stops, through: :posts
  has_many :comments
  has_many :notifications
  EMAIL_REGEX = /\A[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\Z/i

  validates :email, presence: true, uniqueness: true, format: EMAIL_REGEX
  validates :username, presence: true, case_sensitive: false, uniqueness: true, length: { in: 3..20 }




  def self.score(user)
  	score = 0
  	user.posts.each do |post|
  		score += post.cached_weighted_score
  	end

    user.comments.each do |comment|
      score += comment.cached_weighted_score
    end
  	return score

  end

end
