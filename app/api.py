"""
Views related to api_user.
"""
from flask import Blueprint, render_template, request
from flask_login import login_required

from app import mongo
from app.functions.create_cat_from_nace import *

# Blueprint
api = Blueprint("api", __name__, template_folder='templates')


@api.route("/organisations", methods=["GET"])
@login_required
def list_organisations():

    # Get the data_set from db
    # TODO: Rename this to something meaningful and use an actual collection
    data_set_coll = mongo.db.SampleData
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
        # check if a organisation as label = category selected,
        # and add the organisation data to the data_set returned to the template.
        for data in data_set:
            organisation_cat = [data["nace_1_label"].lower() + " " \
            + data["nace_2_label"].lower() + " " \
            + data["nace_3_label"].lower()]
            organisation_cat = organisation_cat[0].split()
            if category_selected in organisation_cat:
                selected_data.append(data)
        data_set = selected_data
    return render_template("api/list_organisations.html",
                           data_set=data_set, categories=categories)