from flask import Flask
from flask_pymongo import PyMongo
from app.config import Config

# Set an instance of PyMongo for communicating with the db.
mongo = PyMongo()


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
    mongo.init_app(app)

    # Import Blueprints and register them so they can be used
    # For exemple I have created the index.py app and registered it as follow
    from app.index import home
    from app.api_users import api_users
    from app.cluster_model import cluster_model
    from app.organisations import organisations
    app.register_blueprint(home)
    app.register_blueprint(api_users)
    app.register_blueprint(cluster_model)
    app.register_blueprint(organisations)

    return app
