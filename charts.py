import os
import json
import numpy as np

from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo


@charts.route('/nace_one_chart', methods=['GET'])
def nace_one_chart():
    # collection
    data_set_coll = mongo.db.SampleData
    
    # data
    data_set = list(data_set_coll.find())

    #query search
    query_activity = "nace_1"

    activity_list = []
    for data in data_set:
        activity_list.append(data[query_activity])

    # x-coordinates corresponding to the activities listed with nace code.
    # here are the code's name corresponding to 'A' and 'J'
    x_axis = ['AGRICULTURE, FORESTRY AND FISHING',
              'INFORMATION AND COMMUNICATION']

    # heights of bars
    # create list of activities list (goes up to 'U' on official website),
    # but we will do 'A' and 'J' for the moment.
    agriculture_forestry_and_fishing = []
    information_and_communnication = []

    list_of_act_list = [agriculture_forestry_and_fishing,
                        information_and_communnication]

    # add the activity to the corresponding list
    for activity in activity_list:
        if activity.lower() == "a":
            agriculture_forestry_and_fishing.append(activity)
        # we only work with J for now so let just do J ;)
        elif activity.lower() == "j":
            information_and_communnication.append(activity)

    # number of items per list
    values = []

    # get the number of companies per  activity
    for activities in list_of_act_list:
        values.append(len(activities))

    return render_template("nace_one_chart.html", x_axis=x_axis, values=values)
