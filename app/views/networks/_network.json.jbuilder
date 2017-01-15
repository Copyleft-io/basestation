json.extract! network, :id, :uid, :name, :description, :category, :network_type, :environment_id, :created_at, :updated_at
json.url network_url(network, format: :json)