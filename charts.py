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


@charts.route('/nace_two_chart', methods=['GET'])
def nace_two_chart():
    # collection
    data_set_coll = mongo.db.SampleData
    
    # data
    data_set = list(data_set_coll.find())

    # here, considering working with broder data, would be a if statement
    # checking for the activity passed through the url upon clicking on a link
    # activity_selected = request.args.get('activity').lower()
    # if activity_selected == 'j':

    activity_selected = 'j'

    # query search
    query_activity = "nace_1"
    query_category = "nace_2"
    query_sub_category = "nace_3"

    category_list = []
    sub_category_list = []
    for data in data_set:
        if data[query_activity].lower() == activity_selected:
            category_list.append(data[query_category])
            sub_category_list.append(data[query_sub_category])

    # x-coordinates corresponding to the categories of an activity listed with nace code.
    # here are the code's name corresponding to 'J.<nb>',
    # in corresponding order <nb>: 58, 59, 60, 61, 62, 63
    x_axis = ['Publishing activities',
              'Motion picture, video and television programme production, \
              sound recording and music publishing activities',
              'Programming and broadcasting activities',
              '	Telecommunications',
              'Computer programming, consultancy and related activities',
              'Information service activities']

    # heights of bars
    # create list of category list,
    fifty_height = []
    fifty_nine = []
    sixty = []
    sixty_one = []
    sixty_two = []
    sixty_three = []


    list_of_category_list = [fifty_height, fifty_nine, sixty,
                        sixty_one, sixty_two, sixty_three]

    # add the activity to the corresponding list
    for category in category_list:
        if category == "J.58":
            fifty_height.append(category)
        elif category == "J.59":
            fifty_nine.append(category)
        elif category == "J.60":
            sixty.append(category)
        elif category == "J.61":
            sixty_one.append(category)
        elif category == "J.62":
            sixty_two.append(category)
        elif category == "J.63":
            sixty_three.append(category)

    # number of items per list
    values = []

    # get the number of companies per  activity
    for categories in list_of_category_list:
        values.append(len(categories))

    return render_template("nace_two_chart.html", x_axis=x_axis, values=values)
