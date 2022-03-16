import email
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import Email, InputRequired, Length, DataRequired


''' A form to register a new user. '''
class RegisterForm(FlaskForm):
    username = StringField('Enter Your Name', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('Enter Your Password', validators=[InputRequired(), Length(min=4, max=15)])
    email = StringField('email', validators=[InputRequired(), Email(message='Invalid Email'), Length(min=6, max=50)])

'''A form to login a user. '''
class LoginForm(FlaskForm):
    username = StringField('Enter Your Name', validators=[InputRequired()])
    password = PasswordField('Enter Your Password', validators=[InputRequired()])
    remember = BooleanField('Remember Me')

''' A form to reset a user's password. '''
class ResetPasswordForm(FlaskForm):
    username = StringField('Enter Your Name', validators=[InputRequired()])
    password = PasswordField('New Password', validators=[InputRequired()])
    confirm_password = PasswordField('Confirm New Password', validators=[InputRequired()])
# End of forms.py