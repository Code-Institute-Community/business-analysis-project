import uuid

from flask import jsonify, request
from flask_login import UserMixin
from passlib.hash import pbkdf2_sha256
from pymongo import ReturnDocument
from werkzeug.security import check_password_hash, generate_password_hash
from bson.objectid import ObjectId

from app import mongo, login_manager


class User(UserMixin):
    def __init__(self, user):
        self.id = str(user.get('_id'))
        self.username = user.get('username')
        self.email = user.get('email')
        self._is_active = user.get('is_active')
        self.is_admin = user.get('is_admin')
        self.favourites = user.get('favourites') or []

    @staticmethod
    def is_authenticated():
        return True

    def is_active(self):
        return self._is_active

    @staticmethod
    def is_anonymous():
        return False

    def get_id(self):
        return self.id

    @login_manager.user_loader
    def load_user(userid):
        user = mongo.db.users.find_one({"_id": ObjectId(userid)})

        if not user:
            return None

        return User(user)

    def append_favourite(self, organisation_id):
        """
        Add a organisation to favourites (array of organisation ids) for a user in
        MongoDB
        - Append the list of organisation id in users collection if favourites field
        exists
        - Create a new field if "favourites" does not exists and try statement
        fails
        """
        try:
            mongo.db.users.update_one(
                {"_id": ObjectId(self.id)},
                {"$push": {"favourites": ObjectId(organisation_id)}})
        except:
            mongo.db.users.update_one(
                {"_id": ObjectId(self.id)},
                {"$set": {"favourites": [ObjectId(organisation_id)]}})

    def remove_from_favourites(self, organisation_id):
        """
        Remove from a organisation from user's favourite array
        """
        mongo.db.users.update_one(
            {"_id": ObjectId(self.id)},
            {"$pull": {"favourites": ObjectId(organisation_id)}})
    
    def get_favourites(self):
        """
        Get a user's favourited organisations
        """
        return list(mongo.db.organisations.find(
            {"_id": {"$in": self.favourites}}))

    @staticmethod
    def register(username, email, password):
        # Create the user object
        user = mongo.db.users.find_one_and_update(
            {'username': username},
            {'$set': {
                'username': username,
                'email': email,
                'password': generate_password_hash(password),
                'is_active': True,
                'is_admin': False,
                'favourites': []
            }},
            upsert=True,
            return_document=ReturnDocument.AFTER)
        return User(user)
        
    @staticmethod
    def update_password(username, new_password):
        return mongo.db.users.update_one(
            {"username": username},
            {"$set": {"password": generate_password_hash(new_password)}})

    @staticmethod
    def find_one_user(username):
        """
        Find a single user in Mongo DB using session username
        (session "_user_id")
        """
        user = mongo.db.users.find_one({"username": username.lower()})
        return user

    @staticmethod
    def check_password(password_hash, password):
        return check_password_hash(password_hash, password)
