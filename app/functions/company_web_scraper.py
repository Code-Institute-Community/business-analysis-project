import requests
from bs4 import BeautifulSoup
import re

def scraper(url_to_scrape):
    '''
    Function to extract html document from given url
    Pass string URL as argument to function
    '''
    # request for HTML document of given url
    response = requests.get(url_to_scrape)

    # response will be provided in JSON format
    # create document
    html_document = response.text

    # create soup object
    soup = BeautifulSoup(html_document, 'html.parser')

    # find all the anchor tags with "href" 
    # attribute starting with "https:// and the about keyword"
    # remove | about if you want to return all links on landing page
    links = []
    for link in soup.find_all('a', 
                            attrs={'href': re.compile(r'^http://|about')}):
        links.append(link.get('href'))
    # display the actual urls
    print(links[0])

    URL = links[0]
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")

    for words in soup.find_all('p'):
        find_all_words = words.get_text()
        print(find_all_words)