'''
View to extract keywork from data usin TextRank
'''

from flask import Blueprint, render_template
from flask_login import login_required

from app.functions.text_rank import TextRank4Keyword
from app.functions.company_web_scraper import getHTMLdocument

# Blueprint
categories = Blueprint("categories", __name__, template_folder='templates')


@categories.route("/clustering", methods=["GET"])
@login_required
def clustering():
    '''Implementation of TextRank classe from Xu Liang'''
    # create document test from website url
    url_to_scrape = 'https://www.salesforce.com'
    html_document = getHTMLdocument(url_to_scrape)

    text = html_document
    tr4w = TextRank4Keyword()
    tr4w.analyze(text, candidate_pos = ['NOUN', 'PROPN'], window_size=4, lower=False)
    keywords_list = tr4w.get_keywords(10)

    return render_template("categories/clustering.html", keywords_list=keywords_list)


