import email
from flask import Flask, render_template, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class Register(FlaskForm):
    username = StringField('Enter Your Name', validators=[DataRequired()])
    password = StringField('Enter Your Password', validators=[DataRequired()])
    email = StringField('Enter Your Email', validators=[DataRequired()])
    submit = SubmitField('Submit')


class Login(FlaskForm):
    username = StringField('Enter Your Name', validators=[DataRequired()])
    password = StringField('Enter Your Password', validators=[DataRequired()])
    
    
    