class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :message, null: false, default: ""
      t.string :url, null: false, unique: true
      t.datetime :end_date, null: false
      t.belongs_to :user, null: false

      t.index :url
      t.timestamps null: false
    end
  end
end
