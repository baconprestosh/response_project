class CreateVehicles < ActiveRecord::Migration[5.1]
  def change
    create_table :vehicles do |t|
      t.string :model_year, null: false
      t.string :vehicle_make, null: false
      t.string :vehicle_model, null: false

      t.timestamps
    end
  end
end
