class SubwayStop < ApplicationRecord
  has_many :posts, dependent: :destroy
  validates_associated :posts
  accepts_nested_attributes_for :posts
  has_many :users, through: :posts
  validates :line,:stop, presence: true,
                    length: { minimum: 1 }

  #logic from https://medium.com/@yassimortensen/simple-search-form-in-rails-8483739e4042
  def self.search(search)
  	if search
  		subway_stop = SubwayStop.find_by(stop: search)
  		if subway_stop
  			self.where(id: subway_stop)
  		else
  			return SubwayStop.all
  		end
  	else
  		return SubwayStop.all
  	end
  end

  def self.borough(borough)
  	if borough
  		subway_stop = SubwayStop.find_by(borough: borough)
  	else
  		return SubwayStop.all
  	end

  end

end
