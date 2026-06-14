import { useState, useCallback } from 'react'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE = 'https://api.openweathermap.org/data/2.5'

function useWeather() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [unit, setUnit] = useState('metric') // 'metric' = °C, 'imperial' = °F

  const fetchWeather = useCallback(async (city) => {
    if (!city.trim()) return
    setLoading(true)
    setError(null)
    setWeather(null)
    setForecast(null)

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`${BASE}/weather?q=${encodeURIComponent(city)}&units=${unit}&appid=${API_KEY}`),
        fetch(`${BASE}/forecast?q=${encodeURIComponent(city)}&units=${unit}&appid=${API_KEY}`),
      ])

      if (!weatherRes.ok) {
        if (weatherRes.status === 404) throw new Error('City not found. Please check the spelling.')
        if (weatherRes.status === 401) throw new Error('Invalid API key. Check your .env file.')
        throw new Error('Failed to fetch weather data.')
      }

      const weatherData = await weatherRes.json()
      const forecastData = await forecastRes.json()

      setWeather(weatherData)

      // Group forecast by day (one entry per day at noon)
      const daily = {}
      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(' ')[0]
        const hour = item.dt_txt.split(' ')[1]
        if (hour === '12:00:00' || !daily[date]) {
          daily[date] = item
        }
      })
      setForecast(Object.values(daily).slice(0, 5))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [unit])

  const toggleUnit = useCallback(() => {
    setUnit((u) => (u === 'metric' ? 'imperial' : 'metric'))
    setWeather(null)
    setForecast(null)
    setError(null)
  }, [])

  return { weather, forecast, loading, error, unit, fetchWeather, toggleUnit }
}

export default useWeather
