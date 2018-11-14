class CreateRealmTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :realm_types do |t|
      t.string :name
      t.references :realm, foreign_key: true

      t.timestamps
    end
  end
end
