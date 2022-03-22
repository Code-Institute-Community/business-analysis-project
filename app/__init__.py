from flask import Flask
from flask_login import LoginManager
from flask_pymongo import PyMongo
from app.config import Config
from flask_admin import Admin

# Set an instance of PyMongo for communicating with the db.
mongo = PyMongo()
login_manager = None


def create_app(default_config=Config):
    """
    Creates and congfigurates the app.
    Allows to use Blueprint for
    separation of concern.
    """

    app = Flask(__name__)
    # Use the Config class to set the app.
    app.config.from_object(default_config)
    # Pass the app to the PyMongo constructor
    # to ensure communication with the corresponding app.
    global login_manager
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)
    mongo.init_app(app)

    # Import Blueprints and register them so they can be used
    # For exemple I have created the index.py app and registered it as follow
    from app.api import api
    from app.auth import auth
    from app.categories import categories
    from app.home import home
    from app.organisations import organisations
    app.register_blueprint(api, url_prefix='/api')
    app.register_blueprint(auth)
    app.register_blueprint(categories)
    app.register_blueprint(home)
    app.register_blueprint(organisations, url_prefix='/organisations')

    # Create admin interface
    from app.admin import (OrganisationsModel, OrganisationView,
                           Users, UserView)
    admin = Admin(app, name='Business Analysis')
    # Add views for admin dashboard
    admin.add_view(UserView(Users))
    admin.add_view(OrganisationView(OrganisationsModel))

    return app
