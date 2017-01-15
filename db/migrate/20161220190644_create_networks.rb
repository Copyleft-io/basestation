class CreateNetworks < ActiveRecord::Migration[5.0]
  def change
    create_table :networks do |t|
      t.string :uid
      t.string :name
      t.text :description
      t.string :category
      t.string :network_type
      t.belongs_to :environment, foreign_key: true

      t.timestamps
    end
    add_index :networks, :uid, unique: true
  end
end
