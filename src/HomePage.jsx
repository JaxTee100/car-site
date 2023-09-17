import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>This is the home Page</h1>
      <Link to='/honda-home'>Click me</Link>
    </div>
  )
}

export default HomePage
