class Api::V1::EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    events = Event.where(user)
    render json: {
      events: events
    }
  end

  def create
    event = Event.new(event_create_params)
    event.end_date = end_date_param[:end_date][0]

    if event.save!
      render json: {
        event: event
      }
    else
      render json: {
        error: "Couldn't save event"
      }
    end
  end

  def show
    user = event_show_params[:user_id]
    url = event_show_params[:id]
    event = Event.where("user_id = ? AND url = ?", user, url).first

    render json: {
      event: event
    }
  end

  private

  def user
    params.permit(:user_id)
  end

  def end_date_param
    params.permit(:end_date => [])
  end

  def event_create_params
    params.permit(:name, :message, :url, :user_id)
  end

  def event_show_params
    params.permit(:user_id, :id)
  end
end
