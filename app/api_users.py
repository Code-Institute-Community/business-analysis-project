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

    # Search by category functionality
    # get the category from thr url
    category_selected = request.args.get('category')
    if category_selected:
        selected_data = []
        # check if a company as label = category selected,
        # and add the company data to the data_set returned to the template.
        for data in data_set:
            company_cat = [data["nace_1_label"].lower() + " " \
            + data["nace_2_label"].lower() + " " \
            + data["nace_3_label"].lower()]
            company_cat = company_cat[0].split()
            if category_selected in company_cat:
                selected_data.append(data)
        data_set = selected_data
    return render_template("all_companies.html",
                           data_set=data_set, categories=categories)