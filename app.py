import os
import re
from flask import (
                   Flask, flash, redirect, render_template, 
                   url_for, session, request, jsonify)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
import certifi
if os.path.exists("env.py"):
    import env

# Import wtforms
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import Email, InputRequired, Length
# Import authentication forms
from forms import LoginForm, RegisterForm, ResetPasswordForm
# Import certifi to validate ssl certificates
import certifi

from flask_login import LoginManager, UserMixin, current_user, login_user, logout_user, login_required

if os.path.exists('env.py'):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app, tlsCAFile=certifi.where())
collection_name = mongo.db.collection_name
users = mongo.db.users

login_manager = LoginManager(app)
login_manager.login_view = 'login'
db = mongo.db

class User(UserMixin):
    
    def register(self):
        print(request.form)
        
        # Create the user object
        user = {
			"_id": uuid.uuid4().hex,
			"username": request.form.get("username"),
   			"email": request.form.get("email"),
      		"password": request.form.get("password")
		}
        
        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])
        
        return jsonify(user), 200
    
    def __init__(self, username):
        self.username = username

    @staticmethod
    def is_authenticated():
        return True

    @staticmethod
    def is_active():
        return True

    @staticmethod
    def is_anonymous():
        return False

    def get_id(self):
        return self.username

    @staticmethod
    def check_password(password_hash, password):
        return check_password_hash(password_hash, password)

    @staticmethod
    def check_password(password_hash, password):
        return check_password_hash(password_hash, password)

    @login_manager.user_loader
    def load_user(username):
        u = mongo.db.Users.find_one({"Name": username})
        if not u:
            return None
        return User(username=u['username'])

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')

# A route to render the register page and add users to database
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if username already exists in db
        current_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if current_user:
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
        return redirect(url_for("index"))
    return render_template("register.html", form = RegisterForm(request.form))

# A route to render the login page and authenticate users
@app.route("/login", methods=["GET", "POST"])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if request.method == "POST":
        # Check if username already exists in db
        user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
  
        if user and User.check_password(user['password'], form.password.data):
            # make sure the password is correct
            if check_password_hash(
                user["password"], request.form.get("password")):
                user_obj = User(username=user['username'])
                login_user(user_obj)
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

#A route to render logout template and remove user from session cookie  
@app.route("/logout", methods=["GET", "POST"])
def logout():
    if request.method == "POST":
        user = session.get("user")
        session.pop("user", None)
        return redirect(url_for("index"))
    return render_template("logout.html")

# A route to render the password reset page and reset users password
@app.route("/reset_password", methods=["GET", "POST"])
def reset_password():
    form = ResetPasswordForm()
    if request.method == "POST":
        mongo.db.users.update_one(
            {"username": form.username.data.lower()},
            {"$set": {"password": generate_password_hash(form.password.data)}}
        )
        flash("Password Updated")
        return redirect(url_for("login"))
    return render_template("reset_password.html", form=form)

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

# end of file