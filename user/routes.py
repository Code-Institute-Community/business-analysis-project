
from flask import Flask, render_template, request, redirect, url_for
import os, ssl
if (not os.environ.get('PYTHONHTTPSVERIFY', '') and
getattr(ssl, '_create_unverified_context', None)):ssl._create_default_https_context = ssl._create_unverified_context
from app import app
from user.models import User

from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

mongo = PyMongo(app)


""" A route to return the register page """
@app.route("/templates/register", methods=["POST"])
def register():
  if request.method == "POST":
        register = {
            "username": request.form.get("username").lower(),
            "email": request.form.get("email"),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.user.insert_one(register)
        return render_template("templates/register.html")