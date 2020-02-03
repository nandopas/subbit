class Post < ApplicationRecord
  acts_as_votable
  belongs_to :subway_stop
  belongs_to :user
end
