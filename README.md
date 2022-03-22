# Project Description

A Collaborative Open-Source Project where we are looking for a way to put regional Irish IT businesses into clusters based on their services/products. The information about their services/products should be found on their website, but are not in a format it can be used for applications.

# Prerequisists

- Python 3.8+
- MongoDB (either an ATLAS instance or locally installed)

# How to run the project

1) Create a new `env.py` file with the content from the `env.py.sample` file. Update the `MONGO_URI` and `MONGO_DBNAME` if necessary.
1) Install the requirements (optionally create a new virtual environment )
1) Start the app running `pyhton3 run.py` from the terminal

# Flask Blueprint

New Blueprints only need to added for completely new functionality.
Currently we only have four blueprints, please add to these before creating a new one.

1) Organisations - Everything to do with listing, updateing and deleting organisations
1) Categories - Everything to do with analysing, clustering and categorising organisations
1) API - Everthing to do with avaiable RESTful APIs
1) Home - A basic home app and any static views

In case a new Blueprint needs to be created, follow the below steps:

1) Add new file in the `app` directory giving it a meaningful and relevant name (e.g. categories)
2) Import `Blueprint` from flask and define your Blueprint

```
from flask import Blueprint

categories = Blueprint("categories", __name__, template_folder='templates')
```

3) Register your Blueprint in the app directory's `__init__.py` file.

```
from app.categories import categories
app.register_blueprint(categories)
```

4) Create a new sub-folder in the app diretory's `templates` folder for your new Blueprint

5) If your Blueprint needs to use mongodb, import mongo from the `app` directory's `__init__.py` file to reuse the PyMongo instance.

```
from app import mongo
```

6) Here is a full example:

categories.py
```
from flask import Blueprint, render_template

from app import mongo

categories = Blueprint("categories", __name__, template_folder='templates')

@categories.route('/')
def view_categories():
    categories = mongo.db.categories.find()
    return render_template('categories/list_categories.html',
                            categories=categories)
```

# Directory Structure

Below is an outline of what this project's directory structure can and will look like. Please note that working with the file system is not the focus of this project, but rather the planning of its' directory structure.

Please feel free to add, edit and leave comments and/or notes in this file as you see fit. 

Please do not alter the general layout of this template, as markdown can be very sensitive and small spaces, characters, etc. can throw off the whole layout.


    __/business-analysis-project
    |
    |____ app
        |___ __init__.py 
        |___ api.py 
        |___ authentication.py
        |___ categories.py
        |___ config.py
        |___ home.py
        |___ organisations.py
        |____ templates
            |____ api
                |___ list_organisations.html
            |____ authentication
                |___login.html
                |___register.html		
                |___logout.html
                |___reset_password.html
                |___user_dashboard.html
            |____ categories
                |___ clustering.html
            |____ home
                |___ home.html
            |____ organisations
                |___ create_organisations.html
                |___ edit_organisations.html
                |___ list_organisations.html
            |___ base.html
            |___ navbar.html
        |____ functions
            |___ __init__.py
            |___ company_web_scraper.py
            |___ create_cat_from_nace.py
            |___ text_rank.py
        |____ models
            |___ __init__.py
            |___ user.py
        |____ static
            |___ css
                |___ style.css
            |___ js
                |___ script.js
                |___ main.js
    |____ data
        |___ nace_codes.json
    |____ docs
        |___
    |___ .gitignore
    |___ .gitpod.yml
    |___ env.py.sample
    |___ LICENSE
    |___ Procfile
    |___ README.md
    |___ requirements.txt
    |___ run.py

# Challenge

- The primary challenge is to query an existing company name dataset, find their website, extract the relevant data which can be queried by search. 
i.e show all companies that offer IT Security services and display them on a map.

- The map should have the capacity to search, filter, zoom (etc.) by service offering, skillset, location and other overlapping factors.

- It should also have a view with different charts and analytics functionality which is gated by user authentication.

- It should also have an API to retrieve information about the categorisation of the businesses.

# Participation

Participation is open to all Code Institute students (who have passed project 2), alumni and staff. 

[Register your interest here](https://forms.gle/debegzf7oxufVXzR7)

# Participation Format

The project will initially be run over the course of the month of March 2022 with the option to be extended if need be.

In order to participate, you will need to [register your interest here](https://forms.gle/debegzf7oxufVXzR7). The registration will be closed a week before March 2022 and participation after that date will have to be reviewed on a case by case basis.

This project will be run very similar to the Hacktoberfest, the main difference being that this is an internal event which will not be advertised publicly.

Contribution will be rewarded with special participation badges and prizes. 

# Prize Structure

- Small Contributor (1 Approved Pull Request): Participation Badge
- Medium Contributor (3 Approved Pull Request): Small Contributor + Swag Pack
- Large Contributor (5 Approved Pull Requests): Medium Contributor +  Secret Prize

# Credit

- Code to create keywords from a text is from Xu Liang.
  - [Understand TextRank for Keyword Extraction by Python](https://towardsdatascience.com/textrank-for-keyword-extraction-by-python-c0bae21bcec0)
