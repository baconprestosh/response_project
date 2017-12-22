class Repairorder < ApplicationRecord
  validates_presence_of :body_hours, :paint_hours, :reassembly_hours
end
