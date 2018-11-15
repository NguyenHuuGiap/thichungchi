class CreateRealmTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :realm_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
