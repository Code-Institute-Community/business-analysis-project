import os
import re
from flask import (Flask, render_template, redirect, session, request, url_for)
from flask_pymongo import PyMongo
if os.path.exists("env.py"):
    import env
app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

# Flask-User settings
USER_ENABLE_EMAIL = True      # Enable email authentication
USER_ENABLE_USERNAME = True    # Enable username authentication
USER_REQUIRE_RETYPE_PASSWORD = False    # Simplify register form

# Routes
from user import routes

@app.route("/")
@app.route("/get_index")
def get_index():
    # # businesses = list.(mongo.db.businesses.find().sort(
    #     "_id", -1))
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)  