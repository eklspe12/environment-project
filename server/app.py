#!/usr/bin/env python3


# Standard library imports
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request, session, render_template
from flask_cors import CORS
import os
from config import app, db, api
from flask import request
from flask_restful import Resource
from bs4 import BeautifulSoup
import ipdb
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Local imports
from config import app, db, api
# Add your model imports
# app = Flask(__name__, 
#             static_url_path='',
#             static_folder='../client/build')
# app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.jsonify_compatability = False


@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class AirQuality(Resource):
    def post(self):
        try:
            city=request.get_json()['city']
            state=request.get_json()['state']

            air_quality_data = self.scrape_air_quality(city, state)

            return jsonify({'air_quality': air_quality_data})
        except Exception as e:
            return jsonify({'error': str(e)})
        
    def scrape_air_quality(self, city, state):
        airnow_url = f'https://www.airnow.gov/?city={city}&state={state}&country=USA'

        # Using Chrome WebDriver
        driver = webdriver.Chrome()

        try:
            # Open the URL
            driver.get(airnow_url)

            # Wait for the "notranslate" span inside the "aqi" div to be present
            span_notranslate = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '.aqi span.notranslate'))
            )

            # Get the page source after waiting
            html_content = driver.page_source

            # Parse the HTML content with BeautifulSoup
            soup = BeautifulSoup(html_content, 'html.parser')

            # Here, you can add your logic to extract specific data from the soup
            aqi_value = soup.find('div', class_='aqi').find('b').text

            # You can add more data extraction logic here as needed

            # Return the scraped data
            return {'city': city, 'state': state, 'air_quality_index': aqi_value}
        finally:
            # Close the browser window
            driver.quit()

api.add_resource(AirQuality, '/air_quality')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

