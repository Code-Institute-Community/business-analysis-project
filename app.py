import os
import json
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

from nace_codes import nace_codes, get_nace_2
if os.path.exists('env.py'):
    import env


app = Flask(__name__)
app.config['MONGO_DBNAME'] = os.environ.get('MONGO_DBNAME')
app.config['MONGO_URI'] = os.environ.get('MONGO_URI')
app.secret_key = os.environ.get('SECRET_KEY')

mongo = PyMongo(app)


@app.route("/")
def hello():
    return "In the words of Théoden....<br>'So... it beings...'"


# Routes related to crud of organisations
nace_1 = {}
nace_2 = {}
nace_3 = {}
with open('data/nace-codes.json', 'r') as json_data:
    data = json.load(json_data)
    for item in data:
        nace_1[item['Section']] = item['Activity']
    for item in data:
        if item['Division'] is not None:
            nace_2[f"{item['Section']}.{item['Division']}"] = item['Activity']
    for item in data:
        if item['Class'] is not None:
            nace_3[f"{item['Section']}.{item['Class']}"] = item['Activity']


@app.route('/organisations', methods=['GET', 'POST'])
def get_organisations():
    organisations = mongo.db.organisations.find()
    return render_template('organisations_list.html',
                           organisations=organisations)


@app.route('/organisations/create', methods=['GET', 'POST'])
def organisation_create():
    if request.method == 'POST':
        nace_1_code = request.form.get('nace_1')
        nace_1_label = nace_codes[nace_1_code]['label']
        nace_2_code = request.form.get('nace_2')
        nace_2_label = nace_codes[nace_2_code]['label']
        nace_3_code = request.form.get('nace_3')
        nace_3_label = nace_codes[nace_3_code]['label']

        new_org = {
            'organisation_name': request.form.get('organisation_name'),
            "latitude": request.form.get('latitude'),
            "longitude": request.form.get('longitude'),
            "nace_1": nace_1_code,
            "nace_1_label": nace_1_label,
            "nace_2": nace_2_code,
            "nace_2_label": nace_2_label,
            "nace_3": nace_3_code,
            "nace_3_label": nace_3_label,
            'web_address': request.form.get('web_address'),
        }
        mongo.db.organisations.insert_one(new_org)
        return redirect(url_for('get_organisations'))
    else:
        return render_template('create_organisation.html',
                               nace_1=nace_1,
                               nace_2=nace_2,
                               nace_3=nace_3)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)