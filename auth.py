from flask import Blueprint, render_template, redirect, url_for, request, flash
from .models import User

auth = Blueprint('auth', __name__)

login_manager = LoginManager()


""" A method to render the register page """
@auth.route('/register')
def register():
	return render_template('register.html')

# @auth.route('/login', methods=['POST'])
# def login_post


""" A method to render the login page """
@auth.route('/login')
def login():
    return render_template("login.html")

# @auth.route('/signup', methods=['POST'])
# def signup_post


""" A method to logout users """
@auth.route('/logout')
def logout():
	return redirect(url_for('main.index'))