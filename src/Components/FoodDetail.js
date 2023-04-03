import React from 'react'

const FoodDetails = ({ meal }) => {
  return (
    <div className="meal">
      <div>
        <p>{meal.idMeal}</p>
      </div>
      <div>
        <img
          src={
            meal.strMealThumb !== 'N/A'
              ? meal.strMealThumb
              : 'http://via.placeholder.com/400'
          }
          alt={meal.strMeal}
        />
      </div>
      <div>
        <h3>Name: {meal.strMeal}</h3>
        <h4>Category: {meal.strCategory}</h4>
        <h4>Tags: {meal.strTags}</h4>
        <p>Instructions: {meal.strInstructions}</p>
      </div>
    </div>
  )
}

export default FoodDetails
