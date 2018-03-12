class Follow < ApplicationRecord
  validates :follower, :followed, presence: true

  belongs_to :follower, class_name: :User
  belongs_to :followed, class_name: :User
end
