import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const POPULAR = ['London', 'New York', 'Tokyo', 'Paris', 'Dubai', 'Mumbai']

function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) onSearch(input.trim())
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrap}>
          <svg className={styles.searchIcon} width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            className={styles.input}
            type="text"
            placeholder="Search city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {loading && <div className={styles.spinner} />}
        </div>
        <button className={styles.btn} type="submit" disabled={loading}>
          Search
        </button>
      </form>

      <div className={styles.popular}>
        {POPULAR.map((city) => (
          <button
            key={city}
            className={styles.chip}
            onClick={() => { setInput(city); onSearch(city) }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
