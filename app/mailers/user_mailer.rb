class UserMailer < ApplicationMailer
	default to:  'nandopas2@gmail.com', 
            from: 'nandopas2@gmail.com'
 
  def welcome_email
    @user = params[:user]
    #@url  = 'http://example.com/login'
    mail(to: [@user.email, 'nandopas2@gmail.com'], subject: 'Welcome to Subbit!')
  end
end
