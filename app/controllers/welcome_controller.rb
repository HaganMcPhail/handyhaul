class WelcomeController < ApplicationController

  def index
  end

  def show_data
    if params[:name].present?
      email_message = {
        name: params[:name],
        email: params[:email],
        message: params[:message]
      }
      ap "wsz"
      ap email_message

      ContactMailer.user_contact.deliver_now
    end

    render "welcome/index"
  end
end
