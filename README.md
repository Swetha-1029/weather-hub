# React Weather Hub

**Intern ID:** [YOUR INTERN ID]
**Full Name:** [YOUR FULL NAME]
**No. of Weeks:** [NUMBER OF WEEKS]
**Project Name:** React Weather Hub

---

## Project Scope

A real-time weather application built with React.js that fetches live weather data from the OpenWeatherMap API. Users can search any city in the world to view current weather conditions including temperature, humidity, wind speed, visibility, and pressure, along with a 5-day forecast. The app supports toggling between Celsius and Fahrenheit. The project demonstrates API integration using fetch, useEffect, useState, useCallback, custom hooks, loading and error state handling, and CSS Modules.

---

## Features

- Search weather for any city in the world
- Quick search chips for popular cities
- Current weather: temperature, feels like, humidity, wind, visibility, pressure
- Weather icon from OpenWeatherMap
- 5-day forecast with high/low temps
- Toggle between °C and °F
- Loading spinner during API call
- Error handling for invalid city names

## Tech Stack

- React 18
- Vite
- CSS Modules
- OpenWeatherMap API (free)
- Fetch API

## Getting Started

### 1. Get a free API key
- Go to [https://openweathermap.org/api](https://openweathermap.org/api)
- Sign up for free
- Copy your API key

### 2. Set up environment variable
- Create a `.env` file in the root folder
- Add this line:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

### 3. Run the app
```bash
npm install
npm run dev
```

Opens at http://localhost:5173

> Note: New API keys take up to 2 hours to activate after signup.

## Project Structure

```
src/
├── hooks/
│   └── useWeather.js          ← fetches weather + forecast from API
├── components/
│   ├── SearchBar.jsx           ← city search input + popular chips
│   ├── WeatherCard.jsx         ← current weather display
│   ├── ForecastCard.jsx        ← 5-day forecast list
│   └── ErrorMessage.jsx        ← error display
├── App.jsx                     ← root component
├── main.jsx                    ← Vite entry point
└── index.css                   ← global styles + CSS variables
```
