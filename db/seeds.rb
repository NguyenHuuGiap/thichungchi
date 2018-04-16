require 'faker'

#create location
location_top = Location.create! name: "Menu Top", description: "Menu Top", pattern: 0
location_left = Location.create! name: "Menu Left", description: "Menu Left", pattern: 1
location_center = Location.create! name: "Menu center", description: "Menu Right", pattern: 2

#create category
lichsu = Category.create! name: "Tin Tức - Sự Kiện", description: "Tin Tức Sự Kiện"
thuvienanh = Category.create! name: "Tư Liệu", description: "Tư Liệu"
lienhe = Category.create! name: "Quỹ Công Đức", description: "Quỹ Công Đức"
Category.create! name: "Liên Hệ", description: "Liên Hệ"

Category.create! name: "Gioi Thieu Chung", description: "gioi thieu chung"
Category.create! name: "Lich su hinh thanh", description: "Lich su hinh thanh"
Category.create! name: "Gia Tri Coi Nguon", description: "Gia tri coi nguon"

Category.create! name: "Tin Tuc Trong Nuoc", description: "Tin tuc trong nuoc"
Category.create! name: "Tin Tuc Quoc Te", description: "Tin tuc quoc te"

dn = Category.create! name: "Danh Nhan Lich Su", description: "Danh nhan lich su noi tieng"
ls = Category.create! name: "Lich Su Dong Ho", description: "Lich su dong ho"

Category.create! name: "Gia Phả Các Chi Họ", description: "Gia phả các chi họ"
Category.create! name: "Điều Lệ", description: "Điều lệ"
Category.create! name: "Kết Nối Dòng Họ", description: "Kết nối dòng họ"
hd = Category.create! name: "Thông Báo Hoạt Động", description: "Thông Báo Hoạt Động"
Category.create! name: "Hội Người Họ Nguyễn Cấp Tỉnh", description: "Hội Người Họ Nguyễn Cấp Tỉnh"
Category.create! name: "Sách Về Họ Nguyễn", description: "Sách Về Họ Nguyễn"
Category.create! name: "Tài Trợ, Đóng Góp", description: "Tài trợ đóng góp"
Category.create! name: "Thông Báo Tài Chính", description: "Thông báo tài chính"
Category.create! name: "CLB Tuổi Trẻ Họ Nguyễn", description: "CLB Tuổi Trẻ Họ Nguyễn"
Category.create! name: "Sách Truyện Thơ Về Họ Nguyễn", description: "Sách Truyện Thơ Về Họ Nguyễn"
#create location category

#menu top
LocationCategory.create! position: 1, location: location_top, category: lichsu
LocationCategory.create! position: 2, location: location_top, category: thuvienanh
LocationCategory.create! position: 3, location: location_top, category: lienhe

#menu left
LocationCategory.create! position: 0, location: location_left, category: hd
LocationCategory.create! position: 1, location: location_left, category: lienhe
LocationCategory.create! position: 2, location: location_left, category: lichsu

#menu center
LocationCategory.create! position: 0, location: location_center, category: hd
LocationCategory.create! position: 1, location: location_center, category: dn
LocationCategory.create! position: 2, location: location_center, category: ls

#create post gioi thieu
Post.create! title: "Giới thiệu", content: Faker::Markdown.ordered_list, summary: Faker::Demographic.race, pattern: "GioiThieu"

Admin.create! email: "admin@gmail.com", password: 123123

0.upto 10 do |x|
  Genealogy.create! name: Faker::Name.name, gioitinh: "male", doithu: 1, tucdanh: "abc", conong: "a", conba: "b", sinhnam: Date.today, sinhquan: "abc", tathe: Date.today,
    motang: "acb", biamo: "aa", kyong: 12, parent_id: x
end
