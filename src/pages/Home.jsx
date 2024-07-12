import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobleContext } from '../Context'

const Home = () => {
  // const data = {
  //   name: "Kaushik",
  //   image: "./images/hero.svg"
  // }

  const { updateHomePage } = useGlobleContext();

  useEffect(() => {
    updateHomePage();
  },[])
  
  return (
    <div>
      <HeroSection  />
    </div>
  )
}

export default Home
