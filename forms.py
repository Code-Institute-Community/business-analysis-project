from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import Email, InputRequired, Length

class Register(FlaskForm):
    username = StringField('Enter Your Name', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('Enter Your Password', validators=[InputRequired(), Length(min=4, max=15)])
    email = StringField('email', validators=[InputRequired(), Email(message='Invalid Email'), Length(min=6, max=50)])

class Login(FlaskForm):
    username = StringField('Enter Your Name', validators=[InputRequired()])
    password = PasswordField('Enter Your Password', validators=[InputRequired()])
    remember = BooleanField('Remember Me')