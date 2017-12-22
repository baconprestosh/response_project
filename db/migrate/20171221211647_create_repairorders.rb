class CreateRepairorders < ActiveRecord::Migration[5.1]
  def change
    create_table :repairorders do |t|
      t.float :body_hours, null: false
      t.float :paint_hours, null: false
      t.float :reassembly_hours, null: false

      t.timestamps
    end
  end
end
