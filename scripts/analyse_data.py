import os

from pymongo import MongoClient

from app.functions.data_analyser import DataAnalyser

MONGO_CLIENT = MongoClient(os.environ.get('MONGO_URI', 'localhost:27017'))
MONGO_DB = MONGO_CLIENT[os.environ.get('MONGO_DBNAME', 'db')]


if __name__ == '__main__':
    analyser = DataAnalyser(MONGO_DB)
    analyser.retrieve_all()
    analyser.analyse_all()
    