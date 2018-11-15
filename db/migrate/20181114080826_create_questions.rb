class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :title
      t.string :content
      t.references :realm, foreign_key: true
      t.references :realm_type, foreign_key: true
      t.references :specialize, foreign_key: true

      t.timestamps
    end
  end
end
