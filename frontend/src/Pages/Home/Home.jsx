import React from 'react'
import LandingPage from './Components/LandingPage'
import Opportunities from './Components/Opportunities'
import JoinUs from './Components/JoinUs'
import FAQ from './Components/FAQ'

function Home() {
  return (
    <div className='h-full w-full'>
      <LandingPage></LandingPage>
      <Opportunities></Opportunities>
      <JoinUs></JoinUs>
      <FAQ></FAQ>
    </div>
  )
}

export default Home
