"""
Views related to the presentation of the website,
home page
"""
import os
from flask import Blueprint, render_template, jsonify

from app import mongo


home = Blueprint("home", __name__, template_folder='templates')

@home.route("/")
def view_home():
    # Display home page
    organisations = list(mongo.db.organisations.find())
    token = os.environ.get("ACCESS_TOKEN")
    for organisation in organisations:
        organisation.pop('_id')
    return render_template("home/home.html", organisations=organisations, token=token)
