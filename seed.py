import json
import os

if os.path.exists("env.py"):
    import env

from pymongo import MongoClient


def seed():
    mongo_client = MongoClient(os.environ.get('MONGO_URI'))
    mongo_db = mongo_client[os.environ.get('MONGO_DBNAME')]
    orgs = json.load(open('data/full_data_with_text_keywords.json'))
    mongo_db.organisations.delete_many({})
    mongo_db.organisations.insert_many(orgs)

    categories = json.load(open('data/categories.json'))
    mongo_db.categories.delete_many({})
    mongo_db.categories.insert_many(categories)
    

if __name__ == '__main__':
    seed()
