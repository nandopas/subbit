class SubwayStop < ApplicationRecord
  has_many :posts, dependent: :destroy
  validates :line,:stop, presence: true,
                    length: { minimum: 1 }
end
