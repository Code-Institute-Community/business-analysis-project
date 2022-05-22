from unittest import TestCase

import mongomock
import responses

from .data_analyser import DataAnalyser


class DataAnalyserTest(TestCase):
    def setUp(self):
        self.mongo_client = mongomock.MongoClient()
        self.mongo_db = self.mongo_client['test_db']
        self.analyser = DataAnalyser(self.mongo_db)
        self.mongo_db.organisations.insert_many([
            {'web_address': 'http://example.com', 'website_text': 'This is a Blockchain company'},
            {'web_address': 'http://iot.com', 'website_text': 'This is an IoT company'}
        ])
        responses.add(responses.GET, 'http://example.com', body="<p>Example Domain</p>")
        responses.add(responses.GET, 'http://iot.com', body="<p>IoT Domain</p>")
    
    @responses.activate
    def test_retrieve_one(self):
        result = self.analyser.retrieve_one('http://example.com/')
        self.assertEquals(result['website_text'], 'Example Domain')

    def test__save_website_text(self):
        data = {'url': 'http://example.com', 'website_text': 'This domain is'}
        result = self.analyser._save_website_text(data)
        self.assertEquals(result.modified_count, 1)

    @responses.activate
    def test_retrieve_all(self):
        self.analyser.retrieve_all()
        example = self.mongo_db.organisations.find_one({'web_address': 'http://example.com'})
        self.assertEquals(example['website_text'], 'Example Domain')
        iot = self.mongo_db.organisations.find_one({'web_address': 'http://iot.com'})
        self.assertEquals(iot['website_text'], 'IoT Domain')
    
    def test_org_missing_web_address(self):
        self.mongo_db.organisations.insert_one({'organisation_name': 'Missing website'})
        self.analyser.retrieve_all()
        missing = self.mongo_db.organisations.find_one({'organisation_name': 'Missing website'})
        self.assertTrue('website_text' not in missing)
    
    def test_count_keywords(self):
        text = 'This is a Blockchain company'
        categories = {'Blockchain': 'Blockchain', 'Semi-Conductors': 'Hardware'}
        result = self.analyser.count_keywords(text, categories)
        self.assertEquals(result, [{"Blockchain": 1}])

        text2 = 'This company deals in Semi-conductors'
        result2 = self.analyser.count_keywords(text2, categories)
        self.assertEquals(result2, [{"Hardware": 1}])
    
    def test__save_keywords(self):
        result = self.analyser._save_keywords('http://example.com', {'Blockchain': 1})
        self.assertEquals(result.modified_count, 1)

    def test_analyse_all(self):
        result = self.analyser.analyse_all()
        self.assertEquals(result, 2)
        example = self.mongo_db.organisations.find_one({'web_address': 'http://example.com'})
        self.assertEquals(example['keywords'], [{'Blockchain': 1}])
        iot = self.mongo_db.organisations.find_one({'web_address': 'http://iot.com'})
        self.assertEquals(iot['keywords'], [{'Internet of Things': 1}])
