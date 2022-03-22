import os
from flask import Flask
from flask_admin import AdminIndexView, expose
from flask_mongoengine import MongoEngine
from flask_admin.contrib.mongoengine import ModelView

# Create application
app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': os.environ.get('MONGO_DBNAME'),
    'host': os.environ.get('MONGO_URI'),
}

# Create models
db = MongoEngine(app)


# Define mongoengine documents
class Users(db.Document):
    username = db.StringField(max_length=20, required=True)
    email = db.StringField(max_length=50)
    password = db.StringField(min_length=6, max_length=20)
    is_active = db.BooleanField(default=True)
    is_admin = db.BooleanField(default=False)

    def __unicode__(self):
        return self.name


class OrganisationsModel(db.Document):
    organisation_name = db.StringField()
    latitude = db.StringField()
    longitude = db.StringField()
    nace_1 = db.StringField(max_length=10)
    nace_1_label = db.StringField()
    nace_2 = db.StringField(max_length=10)
    nace_2_label = db.StringField()
    nace_3 = db.StringField(max_length=10)
    nace_3_label = db.StringField()
    web_address = db.StringField()

    meta = {'collection': 'organisations'}

    def __unicode__(self):
        return self.name


# Customized admin views

class UserView(ModelView):
    column_filters = ['username', 'email']
    column_searchable_list = ('username', 'email')


class OrganisationView(ModelView):
    column_filters = ['organisation_name', 'latitude', 'longitude', 'nace_1',
                      'nace_1_label', 'nace_2', 'nace_2_label', 'nace_3',
                      'nace_3_label', 'web_address']
    column_searchable_list = ('organisation_name', 'latitude', 'longitude',
                              'nace_1', 'nace_1_label', 'nace_2',
                              'nace_2_label', 'nace_3', 'nace_3_label',
                              'web_address')
