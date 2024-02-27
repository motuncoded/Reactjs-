import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from "./assets/react.svg";
import './App.css'
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
  const {theme, toggleTheme} = useTheme()
  const asideStyle = {
  backgroundColor:"red",
  color:"#fff"
}
  {/* const Logo = <img src={ reactLogo} alt="logo" />
return Logo;*/}
  return (
    <ThemeProvider>
    <UserProvider>
        <div style={asideStyle}>
            <label className="switch">
     <input
       type="checkbox"
       checked={theme === "light"}
       onChange={toggleTheme}
     />
     <span className="slider round" />
   </label>
      <Nav/>
    <HeaderApp/>
      {/* <Logo />*/}
            </div>

</UserProvider>
</ThemeProvider>
    )  
}

export default App
