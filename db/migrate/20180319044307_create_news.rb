class CreateNews < ActiveRecord::Migration[5.1]
  def change
    create_table :news do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
    add_reference :news, :category
  end
end
