import React from 'react'
import worldImage from '../../assets/world.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
    const navigate = useNavigate()
  return (
     <main className='hero-section main'>
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1 className='heading-xl'>Explore the world, One Country at a Time</h1>
              <p className='paragraph'>Discover the history, culture, and a beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
               <button className='btn btn-darken btn-inline bg-white-box' onClick={() => navigate('/country')}>
              Start Exploring <FaLongArrowAltRight />
            </button>
            </div>
           
            <div className="hero-image">
                <img src={worldImage} alt="world image" className='banner-image' />
              </div>
          </div>
        </main>
  )
}

export default HeroSection