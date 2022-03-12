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

@api_users.route("/all_companies", methods=["GET", "POST"])
def all_companies():
    
    data_set = list(data_set_coll.find())
    
    return render_template("all_companies.html", data_set=data_set)