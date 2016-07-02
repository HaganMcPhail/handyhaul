class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.user_contact.subject
  #
  def user_contact
    @greeting = "Hi"

    mail to: "hagan.lfd36@gmail.com", subject: "Plans tonight?"
  end
end
