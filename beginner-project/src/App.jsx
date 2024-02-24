import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from "./assets/react.svg";
import './App.css'
import Nav from './components/Nav'



function HeaderApp() {
  return (
    <h1>hello world</h1>
  )
}
 
function App() {
  const asideStyle = {
  backgroundColor:"red",
  color:"#fff"
}
  {/* const Logo = <img src={ reactLogo} alt="logo" />
return Logo;*/}
  return (
    <div style={asideStyle}>
      <Nav/>
    <HeaderApp/>
      {/* <Logo />*/}
      

      </div>
    )  
}

export default App
