from flask import Flask
from flask_bootstrap import Bootstrap5
from flask_login import LoginManager
from flask_wtf import CSRFProtect
from flask_pymongo import PyMongo
from flask_admin import Admin

from app.config import Config

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
    db = mongo.init_app(app)
    bootstrap = Bootstrap5(app)
    csrf = CSRFProtect(app)

    # Import and register Blueprints to make them available
    from app.categories import categories
    from app.api import api
    from app.auth import auth
    from app.charts import charts
    from app.home import home
    from app.organisations import organisations
    from app.favourites import favourites
    from app.keywords import keywords
    app.register_blueprint(api, url_prefix='/api')
    app.register_blueprint(auth)
    app.register_blueprint(categories)
    app.register_blueprint(charts)
    app.register_blueprint(home)
    app.register_blueprint(organisations, url_prefix='/organisations')
    app.register_blueprint(favourites, url_prefix="/favourites")
    app.register_blueprint(keywords, url_prefix="/keywords")

    from app.admin.views import DashboardView, OrganisationView, UserView, CategoryView
    # Create admin interface
    admin = Admin(app, name='Business Analysis', index_view=DashboardView())
    # Add views for admin dashboard
    admin.add_view(OrganisationView(mongo.db['organisations']))
    admin.add_view(CategoryView(mongo.db['categories']))
    admin.add_view(UserView(mongo.db['users']))

    return app
