class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  PASSWORD = "A123456"

  attr_accessor :login

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum gender: {female: 0, male: 1, other: 2}

 def self.find_for_database_authentication warden_conditions
   conditions = warden_conditions.dup
   if login = conditions.delete(:login)
     where(conditions).where(["lower(email) = :value", {value: login.strip.downcase}]).first
   else
     where(conditions.to_h).first
   end
 end
end
