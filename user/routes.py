
from flask import Flask
# from user.models import User
from app import app


""" A route to return the register page """
@app.route("/user/register", methods=["POST"]) #use as GET to test in the browser
def register():
    return User().register()
