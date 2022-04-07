"""
Views related to the presentation of the website,
home page
"""
import os
import json
from flask import Blueprint, render_template, jsonify, request, redirect, url_for

from app import mongo


home = Blueprint("home", __name__, template_folder='templates')

@home.route('/api/get-organisations')
def get_organisations():
    organisations = list(mongo.db.organisations.find())
    for organisation in organisations:
        organisation.pop('_id')
    return jsonify(organisations)
    # Create index for search queries
    mongo.db.organisations.create_index([
        ("latitude", 1), 
        ("longitude", 1),
        ('organisation_name', 'text'),
        ('nace_1_label', 'text'),
        ('nace_2_label', 'text'),
        ('nace_3_label', 'text')
        ('web_address', 'text'),
        ('nace_1', 'text'),
        ('nace_2', 'text'),
        ('nace_3', 'text'),
        ],
        name = "organisations_index",
        weights = {
            "latitude": 1,
            "longitude": 1,
            "organisation_name": 10,
            "nace_1_label": 10,
            "nace_2_label": 10,
            "nace_3_label": 10,
            "web_address": 10,
            "nace_1": 10,
            "nace_2": 10,
            "nace_3": 10
        }
    )


@home.route('/api/get-access-token')
def get_access_token():
    token = os.environ.get("ACCESS_TOKEN")
    return jsonify(token)


@home.route("/")
def view_home():
    # Display home page
    return render_template("home/home.html")


@home.route('/search')
def search():
    query = request.form['q']
    text_results = mongo.db.organisations('text', search=query, limit=SEARCH_LIMIT)
    doc_matches = (res['organisations'] for res in text_results['results'])
    return redirect('home/search', query=query, doc_matches=doc_matches)
