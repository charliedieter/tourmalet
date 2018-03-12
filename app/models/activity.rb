class Activity < ApplicationRecord
  validates :title, :polyline, :athlete_id, presence: true
  validates :title, length: { maximum: 20 }
  belongs_to :user, foreign_key: :athlete_id
  has_many :comments
  has_many :likes
  has_many :likers, through: :likes, source: :liker

  def self.find_by_athlete_id(id)
    Activity.where(athlete_id: id)
  end

  def created
    self.created_at.to_date.to_formatted_s(:long_ordinal)
  end
end
