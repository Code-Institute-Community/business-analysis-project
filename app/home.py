"""
Views related to the presentation of the website,
home page
"""
import os
import json
from flask import Blueprint, render_template, jsonify, request

from app import mongo


home = Blueprint("home", __name__, template_folder='templates')

@home.route('/api/get-organisations')
def get_organisations():
    organisations = list(mongo.db.organisations.find())
    for organisation in organisations:
        organisation.pop('_id')
    return jsonify(organisations)

@home.route('/api/get-access-token')
def get_access_token():
    token = os.environ.get("ACCESS_TOKEN")
    return jsonify(token)

@home.route("/", methods=["GET", "POST"])
def view_home():
    # Display home page
    if request.method == "POST":
        search_type = request.form.get("selected_option")
        search_criteria = request.form.get("search_criteria")
        return render_template("home/home.html",search_type=search_type, search_criteria=search_criteria)
    return render_template("home/home.html")
