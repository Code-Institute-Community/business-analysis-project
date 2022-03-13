from curses.ascii import EM
import os
import json
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
# Import wtforms
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import Email, InputRequired, Length
# Import authentication forms
from forms import Login, Register

# Import Flask-Bootstrap
from flask_bootstrap import Bootstrap
# Import certifi to validate ssl certificates
import certifi

if os.path.exists('env.py'):
    import env

app = Flask(__name__)
Bootstrap(app)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app, tlsCAFile=certifi.where())
collection_name = mongo.db.collection_name
users = mongo.db.users

@app.route("/")
@app.route("/index")
def index():
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
    user = session.get("user")
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("login"))


# Routes related to crud of organisations
@app.route('/organisations', methods=['GET', 'POST'])
def get_organisations():
    '''
    Display a list of all organisations in table format for admin user
    '''
    organisations = mongo.db.organisations.find()
    return render_template('organisations_list.html',
                           organisations=organisations)


# TODO: define user role permission for admin and user. When user submits
# the form, will admin have to check the submission and approve before
# it is added to the database?
@app.route("/add_business", methods=["GET", "POST"])
def create_organisation():
    '''
    Add an organisation for normal user and admin user
    '''
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
        mongo.db.organisations.insert_one(business)
        # flash(" - Business Successfully Added - ")
        return redirect(url_for("get_organisations"))

    return render_template("create_organisation.html")


@app.route('/organisations/<organisation_id>/edit', methods=['GET', 'POST'])
def edit_organisation(organisation_id):
    '''
    Edit an organisation for admin user
    '''
    if request.method == 'POST':
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
        edit_org = {
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
        mongo.db.organisations.update_one({'_id': ObjectId(organisation_id)},
                                          {'$set': edit_org})
        return redirect(url_for('get_organisations'))

    organisation = mongo.db.organisations.find_one(
        {'_id': ObjectId(organisation_id)})
    return render_template('edit_organisation.html',
                           organisation=organisation)


@app.route('/organisations/<organisation_id>/delete', methods=['GET', 'POST'])
def delete_organisation(organisation_id):
    '''
    Delete an organisation for admin user
    '''
    mongo.db.organisations.delete_one({'_id': ObjectId(organisation_id)})
    return redirect(url_for('get_organisations'))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
