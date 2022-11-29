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

# all_keywords = all the keywords with their ranking
# key_list = clean keywords-only list
# unq_keys = list of unique keys (no duplicate keywords)
# ignored = list of words to ignore when analysing text

@keywords.route("/", methods=["GET", "POST"])
def view_keywords():
    """ Aggregate and display all keywords from analyser, enable user to remove words from the list
        all_keywords = all the keywords with their ranking
        key_list = clean keywords-only list
        unq_keys = list of unique keys (no duplicate keywords)
        ignored = list of words to ignore when analysing text
    """
    all_keywords, key_list, unq_keys, ignored = ([] for i in range(4))
    existing_ignore_words = list(mongo.db.ignor_words.find())
    for keylist in existing_ignore_words:
        for key_ig in keylist['ignore_words']:
            ignored.append(key_ig)

    if len(all_keywords) == 0:
        for item in data:
            if 'keywords' in item: # check if obj has keywords key
                if item['keywords']: # check if keywords is not empty
                    all_keywords.append(item['keywords'])

    if len(key_list) == 0:
        for item in all_keywords: # generate only values list
            if type(item) == list:
                for value in item:
                    key = list(value.keys())
                    key_list.append(key[0])

    unq_keys = list(dict.fromkeys(key_list)) # remove duplicate keyswords

    unq_keys = [x for x in unq_keys if x not in ignored] # remove ignored words from unique keys list
    if request.method == "POST":
        ignore_words_list = request.form.getlist("keyword-option")
        mongo.db.ignor_words.insert_one({"ignore_words": ignore_words_list}) # inserts new list to ignore words collection
        return redirect(url_for("keywords.view_keywords"))
    
    return render_template('keywords/keywords.html', key_list=key_list, unq_keys=unq_keys, ignore_words=ignored)
