import os
import re
from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm

app = Flask(__name__)
Bootstrap(app)

# # Import Env Variables
# app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
# app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
# app.secret_key = os.environ.get("SECRET_KEY")

# # Import Mongo
# mongo = PyMongo(app)

@app.route("/")
@app.route("/get_index")
def get_index():
    # # businesses = list.(mongo.db.businesses.find().sort(
    #     "_id", -1))
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)  