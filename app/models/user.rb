class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password, length: {within: 6..20, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

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
