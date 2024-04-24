# COVID-19  and Population Dashboard

<img src="https://github.com/Roshanmanwar/COVID-19-Dashboard/blob/main/covid-19-dashboard-image.JPG"/>


## Description

This is a COVID-19 dashboard built using React.js that visualizes statistical data through interactive charts. The dashboard displays pandemic statistics, including total cases, recoveries, and deaths for various countries.

## Features

- Fetches historical COVID-19 data for a default country (USA) and allows the user to select different countries from a dropdown menu.
- Populates the dropdown menu with country options fetched from a REST API.
- Displays statistical data using React components such as statistical cards, line chart, and pie chart.
- Ensures effective application state management using React's state management features.
- Responsive design ensures usability across devices of different screen sizes.
- Implements error handling for all API requests.
- Clean, modular, and well-commented codebase.
- Styled to match the provided mockup as closely as possible.

## Installation

1. Clone the repository:
- git clone <repository-url>
- cd covid19-dashboard
- npm install


## Usage
1. Start the development server:
- npm start
2. Open your browser and go to http://localhost:3000 to view the dashboard.

## API Integration
## COVID-19 Historical Data

- Endpoint: https://disease.sh/v3/covid-19/historical/{country}?lastdays=1500
- Replace {country} with the chosen country from the dropdown (ISO code).
- Example: https://disease.sh/v3/covid-19/historical/usa?lastdays=1500.

## Country Options for Dropdown
- Endpoint: https://restcountries.com/v3.1/all

## Acknowledgements
- Thanks to Disease.sh for providing the COVID-19 data API.
- Thanks to Rest Countries for providing the country list API.




