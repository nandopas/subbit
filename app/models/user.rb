class User < ApplicationRecord
  has_secure_password
  has_many :posts
  EMAIL_REGEX = /\A[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\Z/i

  validates :email, presence: true, uniqueness: true, format: EMAIL_REGEX
  validates :username, presence: true, uniqueness: true, length: { in: 3..20 }
end
