class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.text :description
      t.integer :parent
      t.integer :pattern
      t.integer :position

      t.timestamps
    end
  end
end
