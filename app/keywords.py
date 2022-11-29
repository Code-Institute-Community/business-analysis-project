import json
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for, jsonify,
    Blueprint)
from collections import Counter
from flask_login import current_user, login_required

from app import mongo

from app.models.user import User

keywords = Blueprint("keywords", __name__, template_folder='templates')

data = json.load(open('data/full_data_with_keywords.json'))

all_keywords = [] # all the keywords with their ranking

key_list = [] # clean keywords-only list

unq_keys = [] # list of unique keys (no duplicate keywords)

ignore_words_list ={}

@keywords.route("/", methods=["GET", "POST"])
def view_keywords():
    """ Aggregate and display all keywords from analyser, enable user to remove words from the list """
    # website_text --- keywords
    # all_keywords = list(mongo.db.organisations.find())
    if len(all_keywords) == 0:
        for item in data:
            if 'keywords' in item: # check if obj has keywords key
                if item['keywords']: # check if keywords is not empty
                    all_keywords.append(item['keywords'])
    print(len(all_keywords))
    if len(key_list) == 0:
        for item in all_keywords: # clean up keys list
            if type(item) == list:
                for value in item:
                    key = list(value.keys())
                    key_list.append(key[0])
    unq_keys = list(dict.fromkeys(key_list)) # remove duplicate keyswords
    print(len(key_list))

    if request.method == "POST":
        ignore_words_list = request.form.getlist("keyword-option")
        mongo.db.ignor_words.insert_one({"ignore_words": ignore_words_list}) # inserts new list to ignore words collection
    
    return render_template('keywords/keywords.html', key_list=key_list, unq_keys=unq_keys)
