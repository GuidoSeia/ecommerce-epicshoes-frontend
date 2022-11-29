import React from 'react'
import foto1 from "../assets/fondo.jpg"
import foto2 from "../assets/fondo1.jpg"

export default function Carousel() {
  return (
    <>
      <div className='w-full flex justify-center items-center flex-wrap'>
          <div className='w-1/3'>
            <img src={foto1} className='w-full' />
          </div>
          <div>
            <img src={foto2}  />
          </div>
          <div>
            <img src={foto1}  />
          </div>
          <div>
            <img src={foto2}  />
          </div>
      </div>  
    </>
  )
}
