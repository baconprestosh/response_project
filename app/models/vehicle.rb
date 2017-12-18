class Vehicle < ApplicationRecord
  validates_presence_of :model_year, :vehicle_make, :vehicle_model
end
