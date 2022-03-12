"""
Views related to the presentation of the website,
home page
"""
from flask import (
    Flask, render_template, Blueprint, current_app)

index = Blueprint("index", __name__)


@index.route("/")
@index.route("/index")
def index():
    # Display home page
    return render_template("index.html")