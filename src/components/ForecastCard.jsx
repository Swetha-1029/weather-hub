import React from 'react'
import styles from './ForecastCard.module.css'

function ForecastCard({ forecast, unit }) {
  const unitSymbol = unit === 'metric' ? '°C' : '°F'

  const getDay = (dtTxt) => {
    const date = new Date(dtTxt)
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>5-Day Forecast</h3>
      <div className={styles.list}>
        {forecast.map((item, i) => (
          <div key={i} className={styles.row}>
            <span className={styles.day}>{getDay(item.dt_txt)}</span>
            <img
              className={styles.icon}
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            <span className={styles.desc}>{item.weather[0].description}</span>
            <div className={styles.temps}>
              <span className={styles.high}>{Math.round(item.main.temp_max)}{unitSymbol}</span>
              <span className={styles.low}>{Math.round(item.main.temp_min)}{unitSymbol}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForecastCard
