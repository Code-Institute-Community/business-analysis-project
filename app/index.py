"""
Views related to the presentation of the website,
home page
"""
from flask import (
    Flask, flash, render_template, redirect,
    request, session, url_for, Blueprint, current_app)


home = Blueprint("home", __name__)

@home.route("/")
def index():
    # Display home page
    return render_template("index.html")