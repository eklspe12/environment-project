
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

url = 'https://www.airnow.gov/?city=Castle%20Rock&state=CO&country=USA'

# Using Chrome WebDriver
driver = webdriver.Chrome()

try:
    # Open the URL
    driver.get(url)

    # Find the first div element with class "aqi" after the page is fully loaded
    aqi_div = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'aqi'))
    )

    span_notranslate = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, '.aqi span.notranslate'))
    )

    # Get the page source after waiting
    html_content = driver.page_source

    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find the first div element with class "aqi"
    aqi_div = soup.find('div', class_='aqi')

    if aqi_div:
        # Find the first <b> tag inside the "aqi" div
        bold_tag = aqi_div.find('b')

        if bold_tag:
            print(f'Found <b> tag inside "aqi" div: {bold_tag.text}')
        else:
            print('No <b> tag found inside "aqi" div.')
    else:
        print('No div with class "aqi" found on the page.')

finally:
    # Close the browser window
    driver.quit()