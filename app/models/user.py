import uuid

from flask import jsonify, request
from flask_login import UserMixin
from passlib.hash import pbkdf2_sha256
from werkzeug.security import check_password_hash
from bson.objectid import ObjectId

from app import mongo, login_manager


class User(UserMixin):
    
    def register(self):
        print(request.form)
        
        # Create the user object
        user = {
            "_id": uuid.uuid4().hex,
            "username": request.form.get("username"),
            "email": request.form.get("email"),
            "password": request.form.get("password"),
            "is_active": True,
		}
        
        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])
        
        return jsonify(user), 200
    
    def __init__(self, username, favourites=None):
        self.username = username
        self.favourites = favourites if isinstance(favourites, list) else []

    @staticmethod
    def is_authenticated():
        return True

    @staticmethod
    def is_active():
        return True

    @staticmethod
    def is_anonymous():
        return False

    def get_id(self):
        return self.username

    @staticmethod
    def check_password(password_hash, password):
        return check_password_hash(password_hash, password)

    @staticmethod
    def check_password(password_hash, password):
        return check_password_hash(password_hash, password)

    @login_manager.user_loader
    def load_user(username):
        u = mongo.db.users.find_one({"username": username})
        
        if not u:
            return None
        return User(username=u['username'])

    @staticmethod
    def find_one_user(username):
        """
        Find a single user in Mongo DB using session username (session "_user_id")
        """
        user = mongo.db.users.find_one({"username": username})
        return user

    @staticmethod
    def append_favourite(user_id, company_id):
        """
        Add a company to favourites (array of company ids) for a user in MongoDB
        - Append the list of company id in users collection if favourites field exists
        - Create a new field if "favourites" does not exists and try statement fails
        """
        try:
            mongo.db.users.update_one({"_id": ObjectId(user_id)},
                                  {"$push": {"favourites": ObjectId(company_id)}})
        except:
            mongo.db.users.update_one({"_id": ObjectId(user_id)},
                                  {"$set":{"favourites": [ObjectId(company_id)]}}
                                 )