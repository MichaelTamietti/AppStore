class Api::AppsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: App.all    
  end

  def show
    app = App.find(params[:id])
    render json: app
  end
end
