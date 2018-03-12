class Comment < ApplicationRecord
  validates :author, :activity, :content, presence: true

  belongs_to :author, class_name: :User
  belongs_to :activity
end
