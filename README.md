# Moon Phase App

A small JavaScript web app that displays the current moon phase and illumination using live API data.

## How it works

1. The app sends a city name to the Open-Meteo Geocoding API.
2. The API returns the latitude and longitude.
3. Those coordinates are passed to a lunar data API.
4. The app receives the current moon phase and illumination.
5. JavaScript processes the data and dynamically updates the interface.

## Built with

- HTML
- CSS
- JavaScript
- Open-Meteo Geocoding API
- Daylight Hours Moon API

## What I learned

This project was created as a practical exercise in:

- calling public APIs with `fetch()`
- asynchronous JavaScript using `async` and `await`
- working with JSON, objects and arrays
- passing data between functions
- manipulating the DOM
- using API data to dynamically control HTML and CSS
