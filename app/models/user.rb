class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  PASSWORD = "A123456"

  IMPORT_FILE = {email: 0, name: 1, gender: 2, number_phone: 3, birthday: 4, address: 5}
  EXPORT_FILE = {stt: 0, email: 1, name: 2, gender: 3, number_phone: 4, birthday: 5, address: 6}

  attr_accessor :file

  has_many :exams

  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable

  enum gender: {female: 0, male: 1, other: 2}

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

  class << self
    def import_file file
      spreadsheet = Roo::Spreadsheet.open file
      users = []
      (2..spreadsheet.last_row).each do |i|
        row = spreadsheet.row(i)
        next if row[IMPORT_FILE[:email]].blank?
          # IMPORT_FILE = {email: 0, name: 1, gender: 2, number_phone: 3, birthday: 4, address: 5}
        gender = (row[IMPORT_FILE[:gender]] == "Nam") ? "male" : "female"
        users << User.new(
          email: row[IMPORT_FILE[:email]],
          name: row[IMPORT_FILE[:name]],
          gender: gender,
          number_phone: row[IMPORT_FILE[:number_phone]],
          birthday: row[IMPORT_FILE[:birthday]],
          address: row[IMPORT_FILE[:address]],
          password: PASSWORD,
          password_confirmation: PASSWORD
        )
      end
      import! users, validate: false
    end

    def export_file header, users
      CSV.generate do |csv|
        csv << header
        users.each_with_index do |user, index|
          csv << EXPORT_FILE.keys.map do |attr|
            value = user[attr]
            if attr == :stt
              value = index + 1
            elsif attr == :gender
              value = take_gender(value)
            elsif attr == :birthday
              value = value&.strftime("%d/%m/%Y")
            end
            value
          end
        end
      end
    end

    def take_gender gender
      case gender
      when "female"
        "Nu"
      when "male"
        "Nam"
      when "other"
        "other"
      end
    end
  end
end
