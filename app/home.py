"""
Views related to the presentation of the website,
home page
"""
import os
import json
from flask import Blueprint, render_template, jsonify, request, redirect, url_for
import warnings
warnings.filterwarnings('ignore')

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
    mongo.db.organisations.create_index([
        ("latitude", 1), 
        ("longitude", 1),
        ('organisation_name', 'text'),
        ('nace_1_label', 'text'),
        ('nace_2_label', 'text'),
        ('nace_3_label', 'text'),
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
    print("Index created")
    # Display home page
    return render_template("home/home.html")


# '''A method to query the organisations_index and return the results'''
# @home.route("/search/", methods=["GET"])
# def search():
#     search = request.form.get("search")
#     data = mongo.db.organisations.find({'organisation_name': {'$regex': search, '$options': 'i'}})
#     result = organisations.ObjectId(data)s
#     return jsonify(result)

#     # return jsonify(list(search_organisations))
#     # data = Info(request.form['q'], request.form['number1'], request.form['number2'])

#     # query = request.args.get('query')
#     # print(query)
#     # if query:
#     #     results = mongo.db.organisations.find(
#     #         {
#     #             "$text": {
#     #                 "$search": query
#     #             }
#     #         }
#     #     )
#     # print(results)
#     # return jsonify(list(results))
