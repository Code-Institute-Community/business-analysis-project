import requests
from bs4 import BeautifulSoup
import re


# function to extract html document from given url
def getHTMLdocument(url):
      
    # request for HTML document of given url
    response = requests.get(url)
      
    # response will be provided in JSON format
    return response.text
    
url_to_scrape = "https://www.recruiters.ie/"
  
# create document
html_document = getHTMLdocument(url_to_scrape)
  
# create soap object
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