import { useState } from 'react'
import "./index.css"
const ToggleTheme = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    if (theme === "dark") {
        setTheme("light")
    } else {
        setTheme("dark")
    }
  }


  return (
    <div>
      <button onClick={toggleTheme}>Change theme</button>
      <div className={theme}>Specialised Theme</div>
    </div>
  )
}

export default ToggleTheme
