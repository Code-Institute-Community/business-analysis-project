import os, ssl
if (not os.environ.get('PYTHONHTTPSVERIFY', '') and
getattr(ssl, '_create_unverified_context', None)):ssl._create_default_https_context = ssl._create_unverified_context

import re
from flask import Flask, redirect, render_template, url_for
from flask_pymongo import PyMongo

if os.path.exists("env.py"):
    import env

app = Flask(__name__)
app.config["MONGO_DBNAME"] = "Test"
app.config["MONGO_URI"] = "mongodb://alissa:Apple10@cluster0.fmzii.mongodb.net/Test?ssl=true&retryWrites=true&w=majority"
app.secret_key = "secret_key"

mongo = PyMongo(app)

# Import Routes
from user import routes

@app.route("/")
@app.route("/user/templates/register")
def hello():
    return render_template('register.html')


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)  
