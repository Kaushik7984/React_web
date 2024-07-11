import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = () => {
  const data = {
    name: "Kaushik",
    image: "./images/hero.svg"
  }
  
  return (
    <div>
      <HeroSection {...data} />
    </div>
  )
}

export default Home
