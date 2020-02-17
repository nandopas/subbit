class Comment < ApplicationRecord
  acts_as_votable
  belongs_to :post
  belongs_to :user
  validates :comment, presence: true,
                    length: { minimum: 1}
end
