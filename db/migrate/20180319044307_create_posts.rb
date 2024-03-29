class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.string :logo

      t.timestamps
    end
    add_reference :posts, :category
  end
end
