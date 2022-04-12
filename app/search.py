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

@search.route('/search', methods=['GET', 'POST'])
@login_required
def get_search():
  form = SearchForm()
  data = request.form.get("query")
  if request.method == 'POST' and form.validate_on_submit():
      return redirect((url_for('search.search_results', query=form.search.data)))
  return redirect('home/home.html', form=form)


@search.route('/search_results/<query>')
@login_required
def search_results(query):
  organisations = mongo.db.organisations.find()
  query = query.lower()
  results = []
  for organisation in organisations:
    if query in organisation['organisation_name'].lower():
      results.append(organisation)
  return render_template('search/search_results.html', results=results)
