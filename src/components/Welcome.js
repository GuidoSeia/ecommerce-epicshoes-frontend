import React from 'react'
import "../styles/Welcome.css"

export default function Welcome() {
  return (
    <div className='home'>
        <div className='info'>
          <div className='container-info'>
              <h2 className='title-home w-full text-center mb-4'>Epic Shoes</h2>
              <div className='flex items-center justify-center text-black'>              
                <p className='w-96 text-center text-2xl'>«A new story for each shoe, designed for the freedom of walking»</p>            
            </div>      
            <input type="button" value="Shop Now !" className="btn mt-8 text-white" />   
          </div>
        </div>
        <div className='img'></div>
    </div>
  )
}
