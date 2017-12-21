# this is Api Vehicles Controller
class Api::V1::TechniciansController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    technicians = Technician.all
    render json: { technicians: technicians }
  end

  def show
    technician = Technician.find(params[:id])
    render json: technician
  end

  def create
    technician = Technician.new(technician_params)
    if technician.save
      render json: technician
    else
      render json: { error: technician.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if Technician.update(params[:id], technician_params)
      technician = Technician.find(params[:id])
      render json: technician
    else
      render json: { error: technician.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def technician_params
    params.require(:technician).permit(
      :first_name,
      :last_name
    )
  end
end
