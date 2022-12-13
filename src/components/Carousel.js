import React from 'react'
import foto1 from "../assets/fondo.jpg"
import foto2 from "../assets/fondo1.jpg"
import "../styles/Carousel.css"

export default function Carousel() {


  return (
    <div className='div-brands flex justify-center flex-col items-center'>
      <h2 className='brands-title w-96 text-center m-5'>BRANDS</h2>
      <div className='flex items-center justify-center w-10/12'>
        <div className='flex items-center flex-wrap  m-7'>
          <div className="cards">
            <figure className="card">
                <figcaption className="card_title">NIKE</figcaption>
                <img src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600" className="photo-brands w-full h-full"/>
            </figure>
          </div>
        </div>
        <div className='flex items-center flex-wrap m-7'>
          <div className="cards">
            <figure className="card">
            <img src="https://images.pexels.com/photos/8378567/pexels-photo-8378567.jpeg?auto=compress&cs=tinysrgb&w=600" className="photo-brands w-full h-full"/>
                <figcaption className="card_title">ADIDAS</figcaption>
            </figure>
          </div>
        </div>
        <div className='flex items-center flex-wrap m-7'>
          <div className="cards">
            <figure className="card">
            <img src="https://images.pexels.com/photos/2969318/pexels-photo-2969318.jpeg?auto=compress&cs=tinysrgb&w=600" className="photo-brands w-full h-full"/>
                <figcaption className="card_title">CONVERSE</figcaption>
            </figure>
          </div>
        </div>
        <div className='flex items-center flex-wrap m-7'>
          <div className="cards">
            <figure className="card">
            <img src="https://images.pexels.com/photos/5967666/pexels-photo-5967666.png?auto=compress&cs=tinysrgb&w=600" className="photo-brands w-full h-full"/>
                <figcaption className="card_title">PUMA</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    
  );
}


