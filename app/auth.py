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
        current_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if current_user:
            flash("Username already exists")
            return redirect(url_for("auth.register"))

        register = {
            "username": request.form.get("username").lower(),
            "email": request.form.get("email").lower(),
            "is_active": True,
            "is_admin": False,
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)
        user_obj = User(register)
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
        user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
  
        if user and User.check_password(user['password'], form.password.data):
            # make sure the password is correct
            if check_password_hash(
                user["password"], request.form.get("password")):
                user_obj = mongo.db.users.find_one(
                    {"username": request.form.get("username").lower()})
                login_user(User(user_obj))
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
        mongo.db.users.update_one(
            {"username": form.username.data.lower()},
            {"$set": {"password": generate_password_hash(form.password.data)}}
        )
        flash("Password Updated")
        return redirect(url_for("auth.login"))
    return render_template("auth/reset_password.html", form=form)
