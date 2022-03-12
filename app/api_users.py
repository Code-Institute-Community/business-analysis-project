"""
Views related to api_user.
"""
from flask import (
    Flask, flash, render_template, redirect,
    request, session, url_for, Blueprint, current_app)


api_users = Blueprint("api_users", __name__)


@api_users.route("/all_companies", methods=["GET", "POST"])
def all_companies():
    # Default GET method
    return render_template("all_companies.html")