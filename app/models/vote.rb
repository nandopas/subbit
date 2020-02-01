class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validates :post, uniqueness: { scope: :post }
  validates :user, uniqueness: { scope: :user }
end
