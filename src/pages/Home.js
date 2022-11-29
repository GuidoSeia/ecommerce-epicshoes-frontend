import React from 'react'
import "../styles/Home.css"
import Welcome from "../components/Welcome"
import Carousel from "../components/Carousel"



function Home() {
  return (
    <div >
        <Welcome/>
        <Carousel/>
    </div>
  )
}

export default Home