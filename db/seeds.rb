require 'faker'

#create location
location_top = Location.create! name: "Menu Top", description: "Menu Top", pattern: 0
location_left = Location.create! name: "Menu Left", description: "Menu Left", pattern: 1
location_center = Location.create! name: "Menu center", description: "Menu Right", pattern: 2

#create category
gioithieu = Category.create! name: "Giới Thiệu", description: "gioi thieu"
tintuc = Category.create! name: "Sổ Gia Phả", description: "Sổ Gia Phả"
lichsu = Category.create! name: "Tin Tức - Sự Kiện", description: "Tin Tức Sự Kiện"
thuvienanh = Category.create! name: "Tư Liệu", description: "Tư Liệu"
lienhe = Category.create! name: "Quỹ Công Đức", description: "Quỹ Công Đức"
Category.create! name: "Liên Hệ", description: "Liên Hệ"

Category.create! name: "Gioi Thieu Chung", description: "gioi thieu chung", parent: gioithieu.id
Category.create! name: "Lich su hinh thanh", description: "Lich su hinh thanh", parent: gioithieu.id
Category.create! name: "Gia Tri Coi Nguon", description: "Gia tri coi nguon", parent: gioithieu.id

Category.create! name: "Tin Tuc Trong Nuoc", description: "Tin tuc trong nuoc", parent: tintuc.id
Category.create! name: "Tin Tuc Quoc Te", description: "Tin tuc quoc te", parent: tintuc.id

dn = Category.create! name: "Danh Nhan Lich Su", description: "Danh nhan lich su noi tieng", parent: lichsu.id
ls = Category.create! name: "Lich Su Dong Ho", description: "Lich su dong ho", parent: lichsu.id

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
LocationCategory.create! position: 0, location: location_top, category: gioithieu
LocationCategory.create! position: 1, location: location_top, category: tintuc
LocationCategory.create! position: 2, location: location_top, category: lichsu
LocationCategory.create! position: 3, location: location_top, category: thuvienanh
LocationCategory.create! position: 4, location: location_top, category: lienhe

#menu left
LocationCategory.create! position: 0, location: location_left, category: hd
LocationCategory.create! position: 1, location: location_left, category: lienhe
LocationCategory.create! position: 2, location: location_left, category: lichsu

#menu center
LocationCategory.create! position: 0, location: location_center, category: hd
LocationCategory.create! position: 1, location: location_center, category: dn
LocationCategory.create! position: 2, location: location_center, category: ls


Post.create! title: "Thông tin gia pha", content: "Sách Truyện Thơ Về Họ NguyễnSách Truyện Thơ Về Họ NguyễnSách Truyện Thơ Về Họ NguyễnSách Truyện Thơ Về Họ NguyễnSách Truyện Thơ Về Họ Nguyễn", category: hd
Category.all.each do |category|
  Post.create! title: Faker::Name.unique.name, content: Faker::Markdown.ordered_list, category: category
  Post.create! title: Faker::Name.unique.name, content: Faker::Markdown.unordered_list, category: category
  Post.create! title: Faker::Name.unique.name, content: Faker::Markdown.inline_code, category: category
end
