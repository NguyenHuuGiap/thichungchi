class AddColumnPatternToPost < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :pattern, :string
  end
end
