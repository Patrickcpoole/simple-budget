# app/models/user.rb

class User < ApplicationRecord
 # attr_accessor :password, :password_confirmation
    has_secure_password

  def self.ransackable_attributes(auth_object = nil)
    ["created_at", "email", "first_name", "id", "id_value", "last_name", "password_digest", "updated_at"]
  end

  validates :first_name, :last_name, :email, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8 }, if: :password_required?

  before_save :encrypt_password, if: :password_required?

  def password_required?
    new_record? || password.present?
  end

  def authenticate(entered_password)
    BCrypt::Password.new(password_digest).is_password?(entered_password) && self
  end

  private

  def encrypt_password
    self.password_digest = BCrypt::Password.create(password)
  end
end
