class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password, length: {within: 6..20, allow_nil: true}

  has_attached_file :avatar,
  styles: { medium: "300x300>", thumb: "100x100>" },
  default_url: "/assets/images/default_profile.png"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_many :activities, foreign_key: :athlete_id
  has_many :comments, foreign_key: :author_id
  has_many :liked_posts, class_name: :Like, foreign_key: :liker_id
  has_many :follows, foreign_key: :follower_id
  has_many :followers, through: :follows, source: :follower
  has_many :followings, through: :follows, source: :followed

  attr_reader :password

  after_initialize :ensure_session_token

  def avatar_url
    avatar.url(:medium)
  end

  def password=(pwd)
    self.password_digest = BCrypt::Password.create(pwd)
  end

  def is_password?(pwd)
    BCrypt::Password.new(self.password_digest).is_password?(pwd)
  end

  def reset_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  def generate_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_creds(email, pwd)
    user = User.find_by(email: email)
    user && user.is_password?(pwd) ? user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= generate_token
  end

end

# User.new({
#   username: 'charlie2',
#   email: 'charlie2@gmail.com',
#   password: 'starwars',
#   avatar: File.open("#{Rails.root}/app/assets/images/default_profile.png")
#   })
