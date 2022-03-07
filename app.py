import os
from flask import (Flask, render_template, redirect, session, request, url_for)
from flask_pymongo import PyMongo
if os.path.exists("env.py"):
    import env
app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
def hello():
    return "In the words of Théoden....<br>'So... it beings...'"


""" A route to return the register page """
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if username exists in the database
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        
        if existing_user:
            return redirect(url_for("register"))
        
        register = {
            "username": request.form.get("username").lower(),
            "email": request.form.get("email"),
            "password": request.form.get("password"),
        }
        mongo.db.users.insert_one(register)
        
        # place new user in "session" cookie
        session["user"] = request.form.get("username").lower()
        return redirect(url_for("profile", username=session["user"]))

    return render_template("register.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)  