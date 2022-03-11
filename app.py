import os
import re
from flask import Flask
if os.path.exists("env.py"):
    import env

import pymongo

app = Flask(__name__)
# Bootstrap(app)

# Import DB
client = pymongo.MongoClient('localhost', 27017)
db = client.test

# Import Routes
from user import routes


@app.route("/")
def hello():
    return "In the words of Théoden....<br>'So... it beings...'"


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)  
