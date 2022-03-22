"""
Views related to the presentation of the website,
home page
"""
from flask import Blueprint, render_template


home = Blueprint("home", __name__, template_folder='templates')

@home.route("/")
def view_home():
    # Display home page
    return render_template("home/home.html")
