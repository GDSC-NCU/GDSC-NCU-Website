import React from 'react'
import LandingPage from './Components/LandingPage'
import Opportunities from './Components/Opportunities'
import JoinUs from './Components/JoinUs'
import FAQ from './Components/FAQ'
import './Home.css'

function Home() {
  return (
    <div className='h-full w-full'>
      <LandingPage />
      <Opportunities />
      <JoinUs />
      <div style={{ marginBottom: "200px" }}>
        <FAQ />
      </div>
    </div>
  )
}

export default Home
