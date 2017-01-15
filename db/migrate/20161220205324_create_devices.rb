class CreateDevices < ActiveRecord::Migration[5.0]
  def change
    create_table :devices do |t|
      t.string :uid
      t.string :name
      t.text :description
      t.string :os
      t.string :cpu
      t.string :ram
      t.string :disk
      t.string :public_ip
      t.string :private_ip
      t.belongs_to :network, foreign_key: true
      t.string :category
      t.string :device_type
      t.string :status
      t.date :commissioned_on
      t.date :decommissioned_on
      t.belongs_to :environment, foreign_key: true

      t.timestamps
    end
    add_index :devices, :uid, unique: true
  end
end
