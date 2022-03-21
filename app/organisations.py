from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for,
    Blueprint)
from bson.objectid import ObjectId

from app import mongo

organisations = Blueprint("organisations", __name__, template_folder='templates')


@organisations.route('/organisations', methods=['GET', 'POST'])
def get_organisations():
    '''
    Display a list of all organisations in table format for admin user
    '''
    organisations = mongo.db.organisations.find()
    return render_template('organisations/organisations_list.html',
                           organisations=organisations)


# TODO: define user role permission for admin and user. When user submits
# the form, will admin have to check the submission and approve before
# it is added to the database?
@organisations.route("/organisations/add", methods=["GET", "POST"])
def create_organisation():
    '''
    Add an organisation for normal user and admin user
    '''
    if request.method == "POST":
        organisation_name = request.form.get("organisation_name")
        latitude = request.form.get("latitude")
        longitude = request.form.get("longitude")
        nace_1 = request.form.get("nace_1")
        nace_1_label = request.form.get("nace_1_label")
        nace_2 = request.form.get("nace_2")
        nace_2_label = request.form.get("nace_2_label")
        nace_3 = request.form.get("nace_3")
        nace_3_label = request.form.get("nace_3_label")
        web_address = request.form.get("web_address")
        business = {
            "organisation_name": organisation_name,
            "latitude": latitude,
            "longitude": longitude,
            "nace_1": nace_1,
            "nace_1_label": nace_1_label,
            "nace_2": nace_2,
            "nace_2_label": nace_2_label,
            "nace_3": nace_3,
            "nace_3_label": nace_3_label,
            "web_address": web_address,
        }
        mongo.db.organisations.insert_one(business)
        # flash(" - Business Successfully Added - ")
        return redirect(url_for("organisations.get_organisations"))

    return render_template("organisations/create_organisation.html")


@organisations.route('/organisations/<organisation_id>/edit', methods=['GET', 'POST'])
def edit_organisation(organisation_id):
    '''
    Edit an organisation for admin user
    '''
    if request.method == 'POST':
        organisation_name = request.form.get("organisation_name")
        latitude = request.form.get("latitude")
        longitude = request.form.get("longitude")
        nace_1 = request.form.get("nace_1")
        nace_1_label = request.form.get("nace_1_label")
        nace_2 = request.form.get("nace_2")
        nace_2_label = request.form.get("nace_2_label")
        nace_3 = request.form.get("nace_3")
        nace_3_label = request.form.get("nace_3_label")
        web_address = request.form.get("web_address")
        edit_org = {
            "organisation_name": organisation_name,
            "latitude": latitude,
            "longitude": longitude,
            "nace_1": nace_1,
            "nace_1_label": nace_1_label,
            "nace_2": nace_2,
            "nace_2_label": nace_2_label,
            "nace_3": nace_3,
            "nace_3_label": nace_3_label,
            "web_address": web_address,
        }
        mongo.db.organisations.update_one({'_id': ObjectId(organisation_id)},
                                          {'$set': edit_org})
        return redirect(url_for('organisations.get_organisations'))

    organisation = mongo.db.organisations.find_one(
        {'_id': ObjectId(organisation_id)})
    return render_template('organisations/edit_organisation.html',
                           organisation=organisation)


@organisations.route('/organisations/<organisation_id>/delete', methods=['GET', 'POST'])
def delete_organisation(organisation_id):
    '''
    Delete an organisation for admin user
    '''
    mongo.db.organisations.delete_one({'_id': ObjectId(organisation_id)})
    return redirect(url_for('organisations.get_organisations'))
