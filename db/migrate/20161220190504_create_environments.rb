class CreateEnvironments < ActiveRecord::Migration[5.0]
  def change
    create_table :environments do |t|
      t.string :uid
      t.string :name
      t.text :description
      t.string :category
      t.string :environment_type

      t.timestamps
    end
    add_index :environments, :uid, unique: true
  end
end
