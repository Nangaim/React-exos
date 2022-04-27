import React from "react"

const Card = ({ meal }) => {
  return (
    <div className="card">
      <div className="card-header">
        <a href={meal.strSource}>{meal.strMeal}</a>
        <h3>Origin : {meal.strArea}</h3>
        <img src={meal.strMealThumb} alt={"thumbnail" + meal.strMeal} />
      </div>
      <p className="content">{meal.strInstructions}</p>
    </div>
  )
}

export default Card
