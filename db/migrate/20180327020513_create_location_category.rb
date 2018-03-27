class CreateLocationCategory < ActiveRecord::Migration[5.1]
  def change
    create_table :location_categories do |t|
      t.integer :position

      t.timestamps
    end

    add_reference :location_categories, :category
    add_reference :location_categories, :location
  end
end
