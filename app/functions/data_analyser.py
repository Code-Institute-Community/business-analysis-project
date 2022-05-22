from collections import Counter
import logging
import re
import requests

from bs4 import BeautifulSoup

logging.basicConfig(level = logging.INFO)


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

        logging.info('Starting to retrieve text from %s' % url)
        index_response = requests.get(url)
        index = BeautifulSoup(index_response.text, 'html.parser')
    
        pattern = r'^(http|https)://.*(about|products|services)'
        links = [
            link['href'] for link
            in index.find_all('a', attrs={'href': re.compile(pattern)})
            if link.get('href')
        ]

        if links:
            website_text = ''
            for link in links:
                response = requests.get(link)
                text = BeautifulSoup(response.text, "html.parser")
                website_text += ''.join([p.get_text() for p in text.find_all('p')])
        else:
            website_text = ''.join([p.get_text() for p in index.find_all('p')])
        logging.info('Finished retriving text from %s' % url)
        return {
            'url': url,
            'website_text': website_text
        }
    
    def retrieve_all(self):
        for org in self.mongo_db.organisations.find({}):
            if not org.get('web_address'):
                logging.info('No web_address for org %s found.' % org['organisation_name'])
                continue

            result = self.retrieve_one(org['web_address'])
            if not result['website_text']:
                continue
            # import ipdb; ipdb.set_trace()
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

    def analyse_all(self):
        count = 0
        for org in self.mongo_db.organisations.find({}):
            keywords = self.count_keywords(org['website_text'], self.categories)
            updated = self._save_keywords(org['web_address'], keywords)
            count += updated.modified_count
        return count