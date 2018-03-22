class CreateAttachment < ActiveRecord::Migration[5.1]
  def change
    create_table :attachments do |t|
      t.string :attachment
      t.string :target_type
      t.integer :target_id
      t.integer :pattern
      t.string :description
      t.string :name

      t.timestamps
    end
  end
end
