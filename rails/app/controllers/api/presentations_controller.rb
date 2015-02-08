class Api::PresentationsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    render json: Presentation.all
  end

  def show
    render json: Presentation.find(params[:id])
  end

  def update
    presentation = Presentation.find(params[:id])
    presentation.title = params[:presentation]['title']
    presentation.save!
    render json: presentation
  end

  def create
    presentation = Presentation.new

    logger.debug "PARAMS #{params.inspect}" 

    presentation.title = params[:presentation]['title']
    presentation.speaker_id = params[:presentation]['speaker_id']
    presentation.save!
    render json: presentation
  end

  def destroy
    presentation = Presentation.find(params[:id])
    presentation.destroy
    render json: '{}'
  end

end
