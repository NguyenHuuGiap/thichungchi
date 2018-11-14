class CreateRankTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :rank_types do |t|
      t.string :name
      t.references :realm_type, foreign_key: true

      t.timestamps
    end
  end
end
