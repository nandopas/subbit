class Post < ApplicationRecord
  acts_as_votable
  belongs_to :subway_stop
  belongs_to :user
  validates :topic, presence: true,
                    length: { minimum: 1, maximum: 140 }


  #helpful: https://stackoverflow.com/questions/2919720/how-to-get-record-created-today-by-rails-activerecord
  #check the API for when I want to do further filtering
  #https://api.rubyonrails.org/classes/Time.html
  def self.today
  	where("created_at >= ?", Time.zone.now.beginning_of_day)
  end
end
