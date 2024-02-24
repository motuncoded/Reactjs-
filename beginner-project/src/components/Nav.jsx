import React from 'react'
const NavItem = (props) => {
  return (
     <ul>
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.third}</li>
                <li>{props.fourth}</li>
      </ul>
  )
}
function Nav() {
  const clickHandler = ()=> console.log("clicked")
  return (
   <nav className="main-nav">
           <NavItem first="Home" second="Articles"  third="Blog"  fourth="Contact"/>
      <button onClick={clickHandler}>Click Me!</button>
        </nav>
  )
}

export default Nav
