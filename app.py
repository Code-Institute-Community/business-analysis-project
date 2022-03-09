import os
import re
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# Import Flask-Login
from flask_login import LoginManager, UserMixin, login_required, login_user, current_user, logout_user
# Import Env
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

# replace with mongodb uri
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:////Users/betafish/Dev2/OPEN SOURCE/business-analysis-project/login-test.db'
# add secret key to env.py
app.config["SECRET_KEY"] = 'you_will_never_guess_this'

db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin, db.Model):
    """
    Create a User table and test in CLI with sqlite3
    """

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route('/')
def index():
    user = User.query.filter_by(username='Alissa').first()
    login_user(user)
    return 'You are now logged in!'


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return 'You are now logged out!'


@app.route('/home')
@login_required
def home():
    return 'The current user is ' + current_user.username


if __name__ == "__main__":
    app.run(debug=True)
