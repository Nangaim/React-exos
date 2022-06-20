import Link from "next/link"
import styles from "../../styles/jobs.module.css"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

const index = ({ data }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {data.map((ninja) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default index
