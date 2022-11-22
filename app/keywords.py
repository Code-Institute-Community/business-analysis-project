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


@keywords.route("/")
def view_keywords():
    # Display keywords page
    # website_text --- keywords
    # all_keywords = list(mongo.db.organisations.find())
    key_list = [] # clean keywords-only list
    total = 0
    for item in data:
        if 'keywords' in item: # check if obj has keywords key
            if item['keywords']: # check if keywords is not empty
                all_keywords.append(item['keywords'])
    
    for item in all_keywords: # clean up keys list
        if type(item) == list:
            for value in item:
                key = list(value.keys())
                key_list.append(key[0])
    total = len(key_list)
    print(total)
    # counts = dict(Counter(key_list))
    # duplicates = {key:value for key, value in counts.items() if value > 1} # find the repetition of each keyword
    # unq_keys = mylist = list(dict.fromkeys(key_list)) # remove duplicate keyswords
    
    return render_template('keywords/keywords.html', key_list=key_list)
