from collections import Counter
import logging
import re
import requests

from bs4 import BeautifulSoup

from app.functions.text_rank import TextRank4Keyword

logging.basicConfig(level = logging.INFO)

TIMEOUT = 10
USER_AGENT_HEADER = {
    "User-Agent" : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
}

class DataAnalyser:
    categories  = {
        "IT Services": "IT Services",
        "Managed Services": "IT Services",
        "Infrastructure": "Infrastructure",
        "Services": "IT Services",
        "Insurance": "Insurance",
        "Hardware": "Hardware",
        "Semi-Conductors": "Hardware",
        "Blockchain": "Blockchain",
        "Distributed Ledger": "Blockchain",
        "Crypto": "Blockchain",
        "Decentralized": "Blockchain",
        "Decentralised": "Blockchain",
        "Data Analytics": "Data Analytics, Machine Learning & AI",
        "Analytics": "Data Analytics, Machine Learning & AI",
        "Data Analysis": "Data Analytics, Machine Learning & AI",
        "Machine Learning": "Data Analytics, Machine Learning & AI",
        "ML": "Data Analytics, Machine Learning & AI",
        "AI": "Data Analytics, Machine Learning & AI",
        "Artificial Intelligence": "Data Analytics, Machine Learning & AI",
        "Healthcare": "Healthcare",
        "IoT": "Internet of Things",
        "Internet of Things": "Internet of Things",
        "Graphic Design": "Graphic & UX/UI Design",
        "UX": "Graphic & UX/UI Design",
        "UI": "Graphic & UX/UI Design",
        "Software Development": "Software Development",
        "Programming": "Software Development",
        "E-Commerce": "E-Commerce",
        "Commerce": "E-Commerce",
        "ECommerce": "E-Commerce"
    }

    def __init__(self, mongo_db):
        self.mongo_db = mongo_db
        self.num_retrieved = 0

    def _save_website_text(self, result):
        return self.mongo_db.organisations.update_one(
            {'web_address': result['url']},
            {'$set': {'website_text': result['website_text']}})
   
    def _save_keywords(self, url, keywords):
        return self.mongo_db.organisations.update_one(
            {'web_address': url}, {'$set': {'keywords': keywords}})

    def retrieve_one(self, url):
        if not url.startswith('http'):
            url = 'https://' + url

        website_text = ''
        try:
            logging.info('Starting to retrieve text from %s' % url)
            index_response = requests.get(url, headers=USER_AGENT_HEADER, timeout=TIMEOUT)
            index = BeautifulSoup(index_response.text, 'html.parser')
            website_text += ''.join([p.get_text() for p in index.find_all('p')])

            pattern = r'^(http|https)://.*(about|products|services)'
            links = [
                link['href'] for link
                in index.find_all('a', attrs={'href': re.compile(pattern)})
                if link.get('href')
            ]

            if links:
                for link in links:
                    response = requests.get(link, headers=USER_AGENT_HEADER, timeout=TIMEOUT)
                    text = BeautifulSoup(response.text, "html.parser")
                    website_text += ''.join([p.get_text() for p in text.find_all('p')])

            logging.info('Finished retriving text from %s' % url)
            return {
                'url': url,
                'website_text': website_text
            }
        except:
            logging.info('Error retrieving content from %s' % url)
            return {
                'url': url,
                'website_text': None
            }
    
    def retrieve_all(self, query={}, refresh=False):
        for org in self.mongo_db.organisations.find(query):
            if not org.get('web_address'):
                logging.info('No web_address for org %s found.' % org['organisation_name'])
                continue

            if org.get('website_text') and refresh is False:
                logging.info('Website text already extracted for org %s.' % org['organisation_name'])
                continue

            result = self.retrieve_one(org['web_address'])
            if not result['website_text']:
                continue

            result['url'] = org['web_address']
            updated = self._save_website_text(result)
            self.num_retrieved += updated.modified_count

    def count_keywords(self, text, categories):
        counted_categories = []
        text_count = Counter([word.replace('\n', '').lower() for word in text.split(' ')])
        for keyword in categories.keys():
            if keyword.lower() in text_count:
                category = categories[keyword]
                counted_categories.append({category: text_count[keyword.lower()]})
        return counted_categories

    def analyse_all(self, query={}):
        count = 0
        for org in self.mongo_db.organisations.find(query):
            if not org.get('website_text'):
                continue

            keywords = self.count_keywords(org['website_text'], self.categories)
            updated = self._save_keywords(org['web_address'], keywords)
            count += updated.modified_count
        return count

    def textrank_all(self, query={}):

        for i, org in enumerate(self.mongo_db.organisations.find(query)):
            if not org.get('website_text') or org['website_text'] == '':
                continue

            print("Analysing text for %", org['web_address'])
            tr4w = TextRank4Keyword()
            tr4w.analyze(org['website_text'].lower(), candidate_pos = ['NOUN', 'PROPN'], window_size=4, lower=False)
            keywords_list = tr4w.get_keywords(10)
            print(keywords_list)

            self._save_keywords(org['web_address'], keywords_list)

            if i % 100 == 0:
                print(i)
