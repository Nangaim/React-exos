import axios from "axios"
import { useEffect, useState } from "react"
import Article from "../components/Article.js"
import Logo from "../components/Logo.js"
import Navigation from "../components/Navigation.js"

const Blog = () => {
  const [blogData, setBlogData] = useState([])
  const [content, setContent] = useState("")
  const [error, setError] = useState(false)
  const [author, setAuthor] = useState("")
  const getData = () => {
    axios.get("http://localhost:3004/articles").then((res) => {
      setBlogData(res.data)
    })
  }

  useEffect(() => getData(), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.length < 140) {
      setError(true)
    } else {
      axios.post("http://localhost:3004/articles", {
        author,
        content,
        date: Date.now(),
      })
      setError(false)
      setAuthor("")
      setContent("")
      getData()
    }
  }
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={author}
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          value={content}
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  )
}

export default Blog
