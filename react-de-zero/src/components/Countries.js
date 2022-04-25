import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"

const Countries = () => {
  const [data, setData] = useState([])
  const [rangeValue, setRangeValue] = useState("36")
  const [isPending, setIspending] = useState(true)
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]
  const [selectedRadio, setSelectedRadio] = useState("")
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data)
      setIspending(false)
    })
  }, [])
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent, index) => (
          <li key={index}>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              value={selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      {isPending && <div> Loading...</div>}
      {!isPending && (
        <ul>
          {data
            .filter((country) => country.continents[0].includes(selectedRadio))
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((country, index) => (
              <Card key={index} country={country} />
            ))}
        </ul>
      )}
    </div>
  )
}

export default Countries
