json.extract! device, :id, :uid, :name, :description, :os, :cpu, :ram, :disk, :public_ip, :private_ip, :network_id, :category, :device_type, :status, :commissioned_on, :decommissioned_on, :environment_id, :created_at, :updated_at
json.url device_url(device, format: :json)