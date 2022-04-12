import os
import json
from flask import Blueprint, render_template, jsonify, request, redirect, url_for
from flask_login import login_required
from app.forms import SearchForm

from bson.objectid import ObjectId
from app import mongo

from app.models.user import User

# Blueprint
search = Blueprint("search", __name__, template_folder='templates')

@search.route('/search', methods=['POST'])
@login_required
def get_search():
  form = SearchForm()
  if not form.validate_on_submit():
    return redirect(url_for('home/home.html'))
  return redirect((url_for('search.search_results', query=form.search.data)))


@search.route('/search_results/<query>')
@login_required
def search_results(query):
  organisations = list(mongo.db.organisations.find())
  results = mongo.db.organisation.query.find_one(query)
  return render_template('search/search_results.html', query=query, results=results)
