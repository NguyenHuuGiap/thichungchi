class CreateRankTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :rank_types do |t|
      t.string :name
      t.integer :number_question

      t.timestamps
    end
  end
end
