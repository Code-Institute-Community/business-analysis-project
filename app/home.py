"""
Views related to the presentation of the website,
home page
"""
import os
import json
from flask import Blueprint, render_template, jsonify
from flask import jsonify

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

@home.route("/")
def view_home():
    # Display home page
    return render_template("home/home.html")


@home.route('/points', methods=['GET'])
def get_all_points():
    points = []
    for organisation in get_organisations():
        points.append({
            'lat': organisation['latitude'],
            'lng': organisation['longitude'],
            'info': organisation['organisation_name']
        })
        return jsonify(points)
