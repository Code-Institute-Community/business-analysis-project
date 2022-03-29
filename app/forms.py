from flask_wtf import FlaskForm, CSRFProtect
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import Email, InputRequired, Length
from flask_bootstrap import Bootstrap5, SwitchField

bootstrap = Bootstrap5()
csrf = CSRFProtect()

''' A form to register a new user. '''
class RegisterForm(FlaskForm):
    first_name = StringField()
    last_name = StringField()
    username = StringField('Choose a Username: ', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('Choose a Password: ', validators=[InputRequired(), Length(min=4, max=15)])
    email = StringField('E-Mail Address: ', validators=[InputRequired(), Email(message='Invalid Email'), Length(min=6, max=50)])
    submit = SubmitField('Register')


'''A form to login a user. '''
class LoginForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

''' A form to reset a user's password. '''
class ResetPasswordForm(FlaskForm):
    username = StringField('Enter Your Name', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])
    confirm_password = PasswordField('Confirm New Password', validators=[InputRequired()])
    confirm = SubmitField('Reset Password')
