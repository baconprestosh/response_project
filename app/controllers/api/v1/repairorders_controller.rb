class Api::V1::RepairordersController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    repairorders = Repairorder.all
    render json: { repairorders: repairorders }
  end

  def show
    repairorder = Repairorder.find(params[:id])
    render json: repairorder
  end

  def create
    repairorder = Repairorder.new(repairorder_params)
    if repairorder.save
      render json: repairorder
    else
      render json: { error: repairorder.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if Repairorder.update(params[:id], repairorder_params)
      repairorder = Repairorder.find(params[:id])
      render json: repairorder
    else
      render json: { error: repairorder.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def repairorder_params
    params.require(:repairorder).permit(
      :body_hours,
      :paint_hours,
      :reassembly_hours
    )
  end
end
