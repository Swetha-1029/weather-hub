import React from 'react'
import styles from './WeatherCard.module.css'

function WeatherCard({ data, unit, onToggleUnit }) {
  const temp = Math.round(data.main.temp)
  const feels = Math.round(data.main.feels_like)
  const icon = data.weather[0].icon
  const desc = data.weather[0].description
  const unitSymbol = unit === 'metric' ? '°C' : '°F'

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.location}>
          <h2 className={styles.city}>{data.name}</h2>
          <p className={styles.country}>{data.sys.country}</p>
        </div>
        <button className={styles.unitToggle} onClick={onToggleUnit}>
          {unit === 'metric' ? 'Switch to °F' : 'Switch to °C'}
        </button>
      </div>

      <div className={styles.main}>
        <img
          className={styles.icon}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={desc}
        />
        <div className={styles.tempWrap}>
          <span className={styles.temp}>{temp}</span>
          <span className={styles.unit}>{unitSymbol}</span>
        </div>
      </div>

      <p className={styles.desc}>{desc}</p>
      <p className={styles.feels}>Feels like {feels}{unitSymbol}</p>

      <div className={styles.details}>
        <div className={styles.detail}>
          <span className={styles.detailIcon}>💧</span>
          <span className={styles.detailVal}>{data.main.humidity}%</span>
          <span className={styles.detailLabel}>Humidity</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailIcon}>💨</span>
          <span className={styles.detailVal}>{Math.round(data.wind.speed)} {unit === 'metric' ? 'm/s' : 'mph'}</span>
          <span className={styles.detailLabel}>Wind</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailIcon}>👁️</span>
          <span className={styles.detailVal}>{(data.visibility / 1000).toFixed(1)} km</span>
          <span className={styles.detailLabel}>Visibility</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailIcon}>🌡️</span>
          <span className={styles.detailVal}>{data.main.pressure} hPa</span>
          <span className={styles.detailLabel}>Pressure</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
