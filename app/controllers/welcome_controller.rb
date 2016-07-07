class WelcomeController < ApplicationController

  def index
  end

  def show_data
    if params[:name].present?
      name = params[:name]
      email = params[:email]
      message = params[:message]

      ContactMailer.user_contact(name, email, message).deliver_now
    end

    render "welcome/index"
  end
end
