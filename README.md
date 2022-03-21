# Project Description

A Collaborative Open-Source Project where we are looking for a way to put regional Irish IT businesses into clusters based on their services/products. The information about their services/products should be found on their website, but are not in a format it can be used for applications.

# Prerequisists

- Python 3.8+
- MongoDB (either an ATLAS instance or locally installed)

# How to run the project

1) Create a new `env.py` file with the content from the `env.py.sample` file. Update the `MONGO_URI` and `MONGO_DBNAME` if necessary.
1) Install the requirements (optionally create a new virtual environment )
1) Start the app running `pyhton3 run.py` from the terminal

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
