class TechniciansController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index; end

  def show; end

  def new; end

  def create; end

  def edit
    render :new
  end
end
