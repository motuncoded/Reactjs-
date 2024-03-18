import { useState } from 'react';
import Layout from "./@components/Layout";
import Nav from './@components/Nav';
import Hero from './@components/Hero';
import './App.css'


function App() {

  return (
    <div className='appContainer'>
      <Nav />
      <Hero/>
    </div>
  );
}

export default App
