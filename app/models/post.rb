class Post < ApplicationRecord
  acts_as_votable
  belongs_to :subway_stop
  belongs_to :user
  validates :topic, presence: true,
                    length: { minimum: 1, maximum: 140 }
end
