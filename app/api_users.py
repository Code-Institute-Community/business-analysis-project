"""
Views related to api_user.
"""
from flask import (
    Flask, flash, render_template, redirect,
    request, session, url_for, Blueprint, current_app)

from app import mongo
from app.functions.create_cat_from_nace import *

# Blueprint
api_users = Blueprint("api_users", __name__)

# collection
data_set_coll = mongo.db.SampleData

@api_users.route("/all_companies", methods=["GET"])
def all_companies():

    # Get the data_set from db
    data_set = list(data_set_coll.find())

    # Get all labels
    labels_list = aggregate_labels(data_set)

    # Create a list of unique labels
    labels_list = clean_labels_list(labels_list)

    # Create catgories list populated from the nace labels
    categories = []
    for label in labels_list:
        categories.append({"category": label})
    print(categories)

    return render_template("all_companies.html",
                           data_set=data_set, categories=categories)