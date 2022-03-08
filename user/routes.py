
from flask import Flask
from app import app
from user.models import User


""" A route to return the register page """
@app.route("/user/register", methods=["POST"]) #use as GET to test in the browser
def register():
    return User().register()


""" A route to login users by email and validate credentials """
app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one(
            # Change to "username" to login with username
            {"email": request.form.get("email")})
        
        if existing_user:
            if existing_user["password"] == request.form.get("password"):
                session["user"] = request.form.get("username").lower()
                return redirect(url_for("dashboard", username=session["user"]))
        
        return redirect(url_for("login"))
