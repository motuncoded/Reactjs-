import { useState } from 'react'

import viteLogo from '/vite.svg'
import reactLogo from "./assets/react.svg";
import Nav from './components/Nav'
import { UserProvider } from './components/UserContext';
import { ThemeProvider } from './components/ThemeContext';
import { useTheme } from "../ThemeContext";


function HeaderApp() {
  return (
    <h1>hello world</h1>
  )
}
 
function App() {

  const [greeting, setGreeting] = useState({
    greet: "Hello, World",
    count: 0

  });

  function updateGreeting() {
    setGreeting((prevState) => {
      return {
        ...greeting,
        greet: "Welcome",
        count: greeting.count + 2
      }
    })
  }
  return (
    <>
      {/*<HeaderApp/>*/}
      <h1>{greeting.greet}</h1>
      <p>{greeting.count}</p>
      <button onClick={updateGreeting}>Greet</button>
    </>
  )



}
export default App
