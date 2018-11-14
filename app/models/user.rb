class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :exams

  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable

  attr_accessor :login

  def email_required?
    false
  end

  def email_changed?
    false
  end

  def self.find_for_database_authentication warden_conditions
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(number_phone) = :value", {value: login.strip.downcase}]).first
    else
      where(conditions.to_h).first
    end
  end
end
