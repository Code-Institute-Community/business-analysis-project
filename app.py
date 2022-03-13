from curses.ascii import EM
import os
from flask import (
                   Flask, flash, redirect, render_template, 
                   url_for, session, request)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
# Import wtforms
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import Email, InputRequired, Length

# Import Flask-Bootstrap
from flask_bootstrap import Bootstrap
# Import certifi
import certifi

if os.path.exists("env.py"):
    import env

app = Flask(__name__)
Bootstrap(app)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app, tlsCAFile=certifi.where())
collection_name = mongo.db.collection_name
users = mongo.db.users

class Register(FlaskForm):
    username = StringField('Enter Your Name', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('Enter Your Password', validators=[InputRequired(), Length(min=4, max=15)])
    email = StringField('email', validators=[InputRequired(), Email(message='Invalid Email'), Length(min=6, max=50)])
class Login(FlaskForm):
    username = StringField('Enter Your Name', validators=[InputRequired()])
    password = PasswordField('Enter Your Password', validators=[InputRequired()])
    remember = BooleanField('Remember Me')

@app.route("/")
@app.route("/index")
def index():
    # users = mongo.db.users.find()
    return render_template('index.html')

@app.route("/register", methods=["GET", "POST"])
def register():
    form = Register()
    if request.method == "POST":
        # check if username already exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        # put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful!")
    return render_template("register.html", form=form)


@app.route("/login", methods=["GET", "POST"])
def login():
    form = Login()
    if request.method == "POST":
        # Check if username already exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        
        if existing_user:
            # make sure the password is correct
            if check_password_hash(
                existing_user["password"], request.form.get("password")):
                    session["user"] = request.form.get("username").lower()
                    flash("Welcome, {}".format(request.form.get("username")))
                    return redirect(url_for("index"))
            else:
                # If password is invalid
                flash("Invalid Username and/or Password")
                return redirect(url_for("login"))               
        
        else:
            # If username doesn't exist
            flash("Invalid Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html", form=form)


@app.route("/logout")
def logout():
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("login"))


@app.route("/add_business", methods=["GET", "POST"])
def add_business():
    if request.method == "POST":
        organisation_name = request.form.get("organisation_name")
        latitude = request.form.get("latitude")
        longitude = request.form.get("longitude")
        nace_1 = request.form.get("nace_1")
        nace_1_label = request.form.get("nace_1_label")
        nace_2 = request.form.get("nace_2")
        nace_2_label = request.form.get("nace_2_label")
        nace_3 = request.form.get("nace_3")
        nace_3_label = request.form.get("nace_3_label")
        web_address = request.form.get("web_address")
        business = {
            "organisation_name": organisation_name,
            "latitude": latitude,
            "longitude": longitude,
            "nace_1": nace_1,
            "nace_1_label": nace_1_label,
            "nace_2": nace_2,
            "nace_2_label": nace_2_label,
            "nace_3": nace_3,
            "nace_3_label": nace_3_label,
            "web_address": web_address,
        }
        mongo.db.business_list.insert_one(business)
        # flash(" - Business Successfully Added - ")
        return redirect(url_for("home"))

    return render_template("add-business.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
