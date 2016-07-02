class WelcomeController < ApplicationController

  def index
  end

  def show_data
    ap "blah_success"
    #if params[:name].present?
    #  message = {
    #    name: params[:name],
    #    email: params[:email],
    #    message: params[:message]
    #  }
    #  ap message
    #end

  end
end
