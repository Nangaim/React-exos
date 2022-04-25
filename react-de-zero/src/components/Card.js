const Card = ({ country }) => {
  const nom = country.name.common
  return (
    <li className="card">
      <img src={country.flags.svg} alt={"flag" + country.name.common} />
      <div className="infos">
        <h2>{nom}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  )
}

export default Card
