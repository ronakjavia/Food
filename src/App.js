import React, { useState, useEffect } from 'react'
import searchIcon from './search.svg'
import FoodDetails from './Components/FoodDetail'
import './App.css'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?'

const App = () => {
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMeals = async (title) => {
    const res = await fetch(`${API_URL}s=${title}`)
    const data = await res.json()

    setMeals(data.meals)
  }

  useEffect(() => {
    searchMeals('')
  }, [])

  return (
    <div className="app">
      <h1>Foody Adda</h1>
      <div className="search">
        <input
          placeholder="Search your meals"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMeals(searchTerm)
          }}
        />
      </div>
      {meals?.length > 0 ? (
        <div className="container">
          {meals.map((meal, l) => (
            <FoodDetails key={l} meal={meal} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No Meals Found</h1>
        </div>
      )}
    </div>
  )
}

export default App
