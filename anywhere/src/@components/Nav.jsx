import React from 'react'
import Circle from './Circle'

function Nav() {
  return (
    <div className="navContainer">
      <div className="flex">
        <Circle />
        <a href="#">Anywhere app</a>
      </div>
      <ul className='nav'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Join</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav
