import React from 'react'
import useWeather from './hooks/useWeather'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastCard from './components/ForecastCard'
import ErrorMessage from './components/ErrorMessage'
import styles from './App.module.css'

function App() {
  const { weather, forecast, loading, error, unit, fetchWeather, toggleUnit } = useWeather()

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Weather<span className={styles.accent}>Hub</span>
          </h1>
          <p className={styles.sub}>Real-time weather for any city in the world</p>
        </header>

        <SearchBar onSearch={fetchWeather} loading={loading} />

        {error && <ErrorMessage message={error} />}

        {!weather && !loading && !error && (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🌤️</span>
            <p>Search for a city to see the weather</p>
          </div>
        )}

        {weather && (
          <WeatherCard data={weather} unit={unit} onToggleUnit={toggleUnit} />
        )}

        {forecast && (
          <ForecastCard forecast={forecast} unit={unit} />
        )}
      </div>
    </div>
  )
}

export default App
