class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.user_contact.subject
  #
  def user_contact(name, email, message)
    @name = name
    @email = email
    @message = message
    #mail to: "handyhaulco@gmail.com", cc: "hagan.lfd36@gmail.com", subject: "Someone Has Contacted You Using The Online Email Form"
  end
end
