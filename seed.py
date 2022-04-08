import json
import os

if os.path.exists("env.py"):
    import env

from pymongo import MongoClient


def seed():
    mongo_client = MongoClient(os.environ.get('MONGO_URI'))
    mongo_db = mongo_client[os.environ.get('MONGO_DBNAME')]
    orgs = json.load(open('data/demo_data.json'))
    mongo_db.organisations.delete_many({})
    mongo_db.organisations.insert_many(orgs)

if __name__ == '__main__':
    seed()
