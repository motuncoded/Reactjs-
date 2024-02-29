import { useState } from 'react'

import './App.css'

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

  function updateGreeting(){
      setGreeting((prevState) =>{
        return{
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
      <p>{ greeting.count}</p>
      <button onClick={updateGreeting}>Greet</button> 
      </>
    )  
}

export default App
