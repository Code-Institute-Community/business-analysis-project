'''
View to extract keywork from data usin TextRank
'''

from flask import (
    Flask, render_template, redirect,
    request, Blueprint, current_app)

from app import mongo
from app.functions.text_rank import TextRank4Keyword
from app.functions.company_web_scraper import getHTMLdocument

# Blueprint
cluster_model = Blueprint("cluster_model", __name__,
                          template_folder='templates')


@cluster_model.route("/clustering", methods=["GET"])
def clustering():
    '''Implementation of TextRank classe from Xu Liang'''
    # create document test from website url
    url_to_scrape = 'https://www.salesforce.com'
    html_document = getHTMLdocument(url_to_scrape)

    text = html_document
    tr4w = TextRank4Keyword()
    tr4w.analyze(text, candidate_pos = ['NOUN', 'PROPN'], window_size=4, lower=False)
    keywords_list = tr4w.get_keywords(10)

    return render_template("clustering.html", keywords_list=keywords_list)


