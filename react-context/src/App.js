import BookList from "./components/BookList"
import Navbar from "./components/Navbar"
import ThemeToogle from "./components/ThemeToogle"
import AuthContextProvider from "./contexts/AuthContext"
import ThemeContextProvider from "./contexts/ThemeContext"

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToogle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
