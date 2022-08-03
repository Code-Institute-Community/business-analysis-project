import os

from pymongo import MongoClient

from app.functions.data_analyser import DataAnalyser

MONGO_CLIENT = MongoClient(os.environ.get('MONGO_URI', 'localhost:27017'))
MONGO_DB = MONGO_CLIENT[os.environ.get('MONGO_DBNAME', 'db')]


if __name__ == '__main__':
    # TODO: Add argparse
    analyser = DataAnalyser(MONGO_DB)
    analyser.retrieve_all({"nace_1": "J"})
    # analyser.analyse_all({"nace_1": "J"})
    analyser.textrank_all({"nace_1": "J"})
