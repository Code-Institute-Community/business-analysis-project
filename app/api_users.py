"""
Views related to api_user.
"""
from app import mongo
from flask import (
    Flask, flash, render_template, redirect,
    request, session, url_for, Blueprint, current_app)

# Blueprint
api_users = Blueprint("api_users", __name__)

# collection
data_set_coll = mongo.db.SampleData

@api_users.route("/all_companies", methods=["GET"])
def all_companies():
    # Get the data_set from db
    data_set = list(data_set_coll.find())

    # catgories sample set that would be populated/created dynamically 
    categories = [
        {"category": "information",
         "sub_categories": ["technologies", "product"]
        },
        {"category": "communication",
         "sub_categories": ["tech", "prod"]
        },
        {"category": "programming",
         "sub_categories": ["frontend", "backend"]
        }]

    return render_template("all_companies.html",
                           data_set=data_set, categories=categories)