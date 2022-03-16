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


@charts.route('/chart_label_one', methods=['GET'])
def chart_lable_one():
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

    return render_template("chart-label-one.html", x_axis=x_axis, values=values)


@charts.route('/chart_label_two', methods=['GET'])
def chart_lable_two():
    # data
    data_set = list(data_set_coll.find())

    # here, considering working with broder data, would be a if statement
    # checking for the activity passed through the url upon clicking on a link
    # activity_selected = request.args.get('activity').lower()
    # if activity_selected == 'j':

    activity_selected = 'j'

    # query search
    query_activity = "nace_1"
    query_cat = "nace_2"
    query_sub_cat = "nace_3"

    cat_list = []
    sub_cat_list = []
    for data in data_set:
        if data[query_activity].lower() == activity_selected:
            cat_list.append(data[query_cat])
            sub_cat_list.append(data[query_sub_cat])

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


    list_of_cat_list = [fifty_height, fifty_nine, sixty,
                        sixty_one, sixty_two, sixty_three]

    # add the activity to the corresponding list
    for cat in cat_list:
        if cat == "J.58":
            fifty_height.append(cat)
        elif cat == "J.59":
            fifty_nine.append(cat)
        elif cat == "J.60":
            sixty.append(cat)
        elif cat == "J.61":
            sixty_one.append(cat)
        elif cat == "J.62":
            sixty_two.append(cat)
        elif cat == "J.63":
            sixty_three.append(cat)

    # number of items per list
    values = []

    # get the number of companies per  activity
    for categories in list_of_cat_list:
        values.append(len(categories))

    return render_template("chart-label-two.html", x_axis=x_axis, values=values)


if __name__ == "__main__":
    charts.run(host=os.environ.get("IP"),
               port=int(os.environ.get("PORT")),
               debug=True)
