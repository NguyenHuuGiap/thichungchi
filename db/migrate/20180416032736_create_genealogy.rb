class CreateGenealogy < ActiveRecord::Migration[5.1]
  def change
    create_table :genealogies do |t|
      t.string :name
      t.string :image
      t.string :gioitinh
      t.string :doithu
      t.string :tucdanh
      t.string :conong
      t.string :conba
      t.string :sinhnam
      t.string :sinhquan
      t.string :tathe
      t.string :motang
      t.string :biamo
      t.string :kyong
      t.string :parent_id
    end
  end
end
