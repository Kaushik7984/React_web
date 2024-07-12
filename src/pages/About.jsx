import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobleContext } from '../Context'

const About = () => {
  const {updateAboutPage} = useGlobleContext()

  useEffect(() =>{ 
    updateAboutPage();
   }, [])


  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default About
