from flask import Blueprint, render_template, flash, redirect, \
                  url_for, session, request
from flask_login import current_user, login_user, logout_user
# from flask_wtf import FlaskForm
from werkzeug.security import generate_password_hash, check_password_hash

from app import mongo
from app.forms import LoginForm, RegisterForm, ResetPasswordForm
from app.models.user import User

# Blueprint
auth = Blueprint("auth", __name__, template_folder='templates')


# A route to render the register page and add users to database
@auth.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if username already exists in db
        user = User.find_one_user(request.form.get("username"))
        if user:
            flash("Username already exists")
            return redirect(url_for("auth.register"))

        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")
        user_obj = User.register(username, email, password)
        login_user(user_obj)
        flash("Registration Successful!")
        return redirect(url_for('home.view_home'))
    return render_template("auth/register.html", form = RegisterForm(request.form))


# A route to render the login page and authenticate users
@auth.route("/login", methods=["GET", "POST"])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('home.view_home'))

    form = LoginForm()
    if request.method == "POST":
        # Check if username already exists in db
        user = user = User.find_one_user(request.form.get("username"))
        if user and User.check_password(user['password'], form.password.data):
            # make sure the password is correct
            if check_password_hash(
                user["password"], request.form.get("password")):
                login_user(User(user))
                flash("Login Successful!")
                return redirect(url_for('home.view_home'))
            else:
                # If password is invalid
                flash("Invalid Username and/or Password")
                return redirect(url_for("auth.login"))               
        else:
            # If username doesn't exist
            flash("Invalid Username and/or Password")
            return redirect(url_for("auth.login"))

    return render_template("auth/login.html", form=form)


#A route to render logout template and remove user from session cookie  
@auth.route("/logout", methods=["GET", "POST"])
def logout():
    if request.method == "POST":
        logout_user()
        return redirect(url_for('home.view_home'))
    return render_template("auth/logout.html")


# A route to render the password reset page and reset users password
@auth.route("/reset_password", methods=["GET", "POST"])
def reset_password():
    form = ResetPasswordForm()
    if request.method == "POST":
        username = form.username.data.lower()
        new_password = form.password.data
        User.update_password(username, new_password)
        flash("Password Updated")
        return redirect(url_for("auth.login"))
    return render_template("auth/reset_password.html", form=form)
