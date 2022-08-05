"""
Views related to the handling and presentation of favourites companies
"""
from bson.objectid import ObjectId
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for, jsonify,
    Blueprint)

from flask_login import current_user, login_required

from app import mongo

from app.models.user import User

favourites = Blueprint("favourites", __name__, template_folder='templates')


def get_categories():
    return [category['name'] for category in mongo.db.categories.find({})]

def get_categories_as_tuple():
    return [
        (category['name'], category['name']) 
        for i, category in enumerate(mongo.db.categories.find({}))]


@favourites.route("/", methods=["GET", "POST"])
@login_required
def view_favourites():
    """
    Function to display user's favourite companies
    - require user to be logged in
    - retrieve user in session
    - find organisations in list of user's favourites
    """
    return render_template('favourites/list_favourites.html',
                           favourites=current_user.get_favourites())


@favourites.route("/add_to_favourites", methods=["GET", "POST"])
@login_required
def add_to_favourites():
    """
    Function to add a organisation to a user's favourite, requiring user to be
    logged-in
    - Post request received from script.js / organisation.html
    - Retrieve the organisation ID from the data
    - Check if organisation has been added to favourites
    - Add organisation id to favourites field in user collection in MongoDB
    - Return success message
    """
    # Retrieve organisation id from post request
    resp = request.form.to_dict(flat=False)
    organisation_id = resp["organisationId"][0]
    if ObjectId(organisation_id) in current_user.favourites:
        flash("Organisation already added to favourites")
        return redirect(url_for('organisations.get_organisations'))
    else:
        # Add organisation ID to user's favourite
        current_user.append_favourite(organisation_id)
        message = "success"

    return jsonify(message)


@favourites.route("/remove_from_favourites", methods=["GET", "POST"])
@login_required
def remove_from_favourites():
    """
    Function to remove a organisation from a user's favourite
    - requires user to be logged-in
    - Post request received from script.js / list_favourites.html
    - Retrieve the organisation ID from the data and removes it from array
      "favourites"
    - Return success message
    """
    # Retrieve organisation id from post request
    resp = request.form.to_dict(flat=False)
    organisation_id = resp["organisationId"][0]
    if ObjectId(organisation_id) in current_user.favourites:
        current_user.remove_from_favourites(organisation_id)
        message = "success"
        return jsonify(message)
    else:
        flash("This organisation was not in your favourites")
        return redirect(url_for('favourites.view_favourites'))
