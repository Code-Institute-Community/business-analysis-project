from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for, jsonify,
    Blueprint)

from flask_login import current_user, login_required

from app import mongo

from app.models.user import User

keywords = Blueprint("keywords", __name__, template_folder='templates')

@keywords.route("/")
def view_keywords():
    # Display keywords page
    return render_template('keywords/keywords.html')
