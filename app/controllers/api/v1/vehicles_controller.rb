# this is Api Vehicles Controller
class Api::V1::VehiclesController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    vehicles = Vehicle.all
    render json: { vehicles: vehicles }
  end

  def show
    vehicle = Vehicle.find(params[:id])
    render json: vehicle
  end

  def create
    vehicle = Vehicle.new(vehicle_params)
    if vehicle.save
      render json: vehicle
    else
      render json: { error: vehicle.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if Vehicle.update(params[:id], vehicle_params)
      vehicle = Vehicle.find(params[:id])
      render json: vehicle
    else
      render json: { error: vehicle.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(
      :model_year,
      :vehicle_make,
      :vehicle_model,
    )
  end
end
