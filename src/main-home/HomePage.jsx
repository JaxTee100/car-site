import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <h1>Cars brands:</h1>
      <Link to='/honda-home' className='honda-link'><h1>Honda(click)</h1></Link>
    </div>
  )
}

export default HomePage
