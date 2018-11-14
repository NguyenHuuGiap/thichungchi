class CreateExams < ActiveRecord::Migration[5.1]
  def change
    create_table :exams do |t|
      t.integer :limit_time
      t.integer :remain_time
      t.integer :result
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
