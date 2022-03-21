import os 

class Config:
    """
    Cretates the configuration for the app to run.
    """
    MONGO_DBNAME = os.environ.get("MONGO_DBNAME")
    MONGO_URI = os.environ.get("MONGO_URI")
    SECRET_KEY = os.environ.get("SECRET_KEY")
