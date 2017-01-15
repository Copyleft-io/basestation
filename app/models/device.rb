class Device < ApplicationRecord
  belongs_to :network
  belongs_to :environment
end
