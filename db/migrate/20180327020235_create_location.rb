class CreateLocation < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :description
      t.integer :pattern

      t.timestamps
    end
  end
end
