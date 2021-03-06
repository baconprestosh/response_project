# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Vehicle.destroy_all
Technician.destroy_all

vehicles = [
  {
    model_year: "2016",
    vehicle_make: "BMW",
    vehicle_model: "330xi",
  },
  {
    model_year: "2017",
    vehicle_make: "Subaru",
    vehicle_model: "WRX",
  },
  {
    model_year: "2015",
    vehicle_make: "Audi",
    vehicle_model: "Q5",
  },
  {
    model_year: "2018",
    vehicle_make: "Volvo",
    vehicle_model: "RS5",
  },
  {
    model_year: "2004",
    vehicle_make: "Honda",
    vehicle_model: "CRV",
  }
],

technicians = [
  {
    first_name: "Jack",
    last_name: "Russell"
  },
  {
    first_name: "George",
    last_name: "Costanza"
  },
  {
    first_name: "Jim",
    last_name: "Howard"
  },
  {
    first_name: "Jason",
    last_name: "Prestosh"
  },
  {
    first_name: "Tom",
    last_name: "Ace"
  },
  {
    first_name: "Scotty",
    last_name: "McNasty"
  }
]

vehicles.each do |v|
  Vehicle.create(
    model_year: v[:model_year],
    vehicle_make: v[:vehicle_make],
    vehicle_model: v[:vehicle_model])
end

technicians.each do |t|
  Technician.create(
    first_name: t[:first_name],
    last_name: t[:last_name])
end
