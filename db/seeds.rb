home = Category.create! name: "Trang Chu", description: "trang chu", pattern: 0
gioithieu = Category.create! name: "Gioi Thieu", description: "gioi thieu", pattern: 0
tintuc = Category.create! name: "Tin Tuc", description: "Tin tuc", pattern: 0
lichsu = Category.create! name: "Lich Su", description: "Lich su", pattern: 0
thuvienanh = Category.create! name: "Thu Vien Anh", description: "Thu vien anh", pattern: 0
lienhe = Category.create! name: "Liên Hệ", description: "Liên Hệ", pattern: 0

Category.create! name: "Gioi Thieu Chung", description: "gioi thieu chung", pattern: 0, parent: gioithieu.id
Category.create! name: "Lich su hinh thanh", description: "Lich su hinh thanh", pattern: 0, parent: gioithieu.id, position: 2
Category.create! name: "Gia Tri Coi Nguon", description: "Gia tri coi nguon", pattern: 0, parent: gioithieu.id

Category.create! name: "Tin Tuc Trong Nuoc", description: "Tin tuc trong nuoc", pattern: 0, parent: tintuc.id
Category.create! name: "Tin Tuc Quoc Te", description: "Tin tuc quoc te", pattern: 0, parent: tintuc.id

Category.create! name: "Danh Nhan Lich Su", description: "Danh nhan lich su noi tieng", pattern: 0, parent: lichsu.id, position: 1
Category.create! name: "Lich Su Dong Ho", description: "Lich su dong ho", pattern: 0, parent: lichsu.id


Category.create! name: "Gia Phả Các Chi Họ", description: "Gia phả các chi họ", pattern: 1
Category.create! name: "Điều Lệ", description: "Điều lệ", pattern: 1
Category.create! name: "Kết Nối Dòng Họ", description: "Kết nối dòng họ", pattern: 1
Category.create! name: "Thông Báo Hoạt Động", description: "Thông Báo Hoạt Động", pattern: 1, position: 0
Category.create! name: "Hội Người Họ Nguyễn Cấp Tỉnh", description: "Hội Người Họ Nguyễn Cấp Tỉnh", pattern: 1
Category.create! name: "Sách Về Họ Nguyễn", description: "Sách Về Họ Nguyễn", pattern: 1
Category.create! name: "Tài Trợ, Đóng Góp", description: "Tài trợ đóng góp", pattern: 1
Category.create! name: "Thông Báo Tài Chính", description: "Thông báo tài chính", pattern: 1
Category.create! name: "CLB Tuổi Trẻ Họ Nguyễn", description: "CLB Tuổi Trẻ Họ Nguyễn", pattern: 1
Category.create! name: "Sách Truyện Thơ Về Họ Nguyễn", description: "Sách Truyện Thơ Về Họ Nguyễn", pattern: 1

Post.create! title: "Thông tin gia pha", content: "Sách Truyện Thơ Về Họ NguyễnSách Truyện Thơ Về Họ NguyễnSách Truyện Thơ Về Họ NguyễnSách Truyện Thơ Về Họ NguyễnSách Truyện Thơ Về Họ Nguyễn", category_id: 15
