import React from 'react'
import "../styles/Home.css"
import Welcome from "../components/Welcome"
import Carousel from "../components/Carousel"
import Layout from "../layouts/Layout"



function Home() {
  return (
    <div >
      <Layout>
        <Welcome/>
        <Carousel/>
      </Layout>
    </div>
  )
}

export default Home