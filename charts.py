import os
import json
import numpy as np

from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo

if os.path.exists('env.py'):
    import env


charts = Flask(__name__)
charts.config['MONGO_DBNAME'] = os.environ.get('MONGO_DBNAME')
charts.config['MONGO_URI'] = os.environ.get('MONGO_URI')
charts.secret_key = os.environ.get('SECRET_KEY')

mongo = PyMongo(charts)

# collection
data_set_coll = mongo.db.SampleData

@charts.route('/charts', methods=['GET'])
def nace_charts():
    data_set = list(data_set_coll.find())

    # divide query search
    query_activity = "nace_1"
    query_cat = "nace_2"
    query_sub_cat = "nace_3"

    activity_list = []
    cat_list = []
    sub_cat_list = []
    for data in data_set:
        activity_list.append(data[query_activity])
        cat_list.append(data[query_cat])
        sub_cat_list.append(data[query_sub_cat])

    # x-coordinates corresponding to the activities listed with nace code.
    # here are the code's name corresponding to 'A' and 'J'
    x_axis = ['AGRICULTURE, FORESTRY AND FISHING',
              'INFORMATION AND COMMUNICATION']

    # heights of bars
    # create list of activities list (goes up to 'U' on official website),
    # but we will do 'A' and 'J' for the moment.
    a = []
    j = []

    list_of_act_list = [a,j]
    print(f'list of activity list === > {list_of_act_list}')

    # add the activity to the corresponding list
    for act in activity_list:
        if act.lower() == "a":
            a.append(act)
        # we only work with J for now so let just do J ;)
        elif act.lower() == "j":
            j.append(act)

    # number of items per list
    values = []

    # get the number of companies per  activity
    for activities in list_of_act_list:
        values.append(len(activities))

    return render_template("charts.html", x_axis=x_axis, values=values)


if __name__ == "__main__":
    charts.run(host=os.environ.get("IP"),
               port=int(os.environ.get("PORT")),
               debug=True)
