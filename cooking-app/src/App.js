import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./components/Card"

function App() {
  const [data, setData] = useState([])
  const [isPending, setIspending] = useState(true)
  const [search, setSearch] = useState("")
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => {
        setData(res.data.meals)
        console.log(res.data.meals)
        setIspending(false)
      })
  }, [search])

  // -- First try of sorting data from imput search
  // const searchMeals = (searchvalue) => {
  //   setSearch(searchvalue)
  //   if (search !== "") {
  //     const filteredData = data.filter((item) => {
  //       // console.log()
  //       return item.strMeal.toLowerCase().includes(search.toLowerCase())
  //     })
  //     setFilteredResults(filteredData)
  //   } else {
  //     setFilteredResults(data)
  //   }
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Cook</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>
      {isPending && <p className="loading">Loading...</p>}
      {/* {!isPending &&
        (search.length > 1 ? (
          <ul>
            {filteredResults.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
            ))}
          </ul>
        ) : (
          <ul>
            {data.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
            ))}
          </ul>
        ))} */}
      {!isPending && (
        <ul>
          {data.slice(0, 24).map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
