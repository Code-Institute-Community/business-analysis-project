from flask import (
    Flask, flash, render_template, redirect,
    request, session, url_for, Blueprint, current_app)

# Blueprint
main = Blueprint("main", __name__)
