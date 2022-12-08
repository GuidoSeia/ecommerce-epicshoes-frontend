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
          <div class="cards">
            <figure class="card">
                <figcaption class="card_title">NIKE</figcaption>
                <img src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600" className="photo-brands w-full h-full"/>
            </figure>
          </div>
        </div>
        <div className='flex items-center flex-wrap m-7'>
          <div class="cards">
            <figure class="card">
            <img src="https://images.pexels.com/photos/8378567/pexels-photo-8378567.jpeg?auto=compress&cs=tinysrgb&w=600" className="photo-brands w-full h-full"/>
                <figcaption class="card_title">ADIDAS</figcaption>
            </figure>
          </div>
        </div>
        <div className='flex items-center flex-wrap m-7'>
          <div class="cards">
            <figure class="card">
            <img src="https://images.pexels.com/photos/2969318/pexels-photo-2969318.jpeg?auto=compress&cs=tinysrgb&w=600" className="photo-brands w-full h-full"/>
                <figcaption class="card_title">CONVERSE</figcaption>
            </figure>
          </div>
        </div>
        <div className='flex items-center flex-wrap m-7'>
          <div class="cards">
            <figure class="card">
            <img src="https://images.pexels.com/photos/5967666/pexels-photo-5967666.png?auto=compress&cs=tinysrgb&w=600" className="photo-brands w-full h-full"/>
                <figcaption class="card_title">PUMA</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    
  )
}


{/* <div className='flex flex-col items-center'>
<h2 className='brands-title flex text-center w-96 justify-center m-10'>BRANDS</h2>
  <div className="carousel flex w-11/12 mb-5">
<div id="slide1" className="carousel-item relative w-full">
<img src="https://placeimg.com/800/200/arch" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide4" className="btn btn-circle">❮</a> zx
  <a href="#slide2" className="btn btn-circle">❯</a>
</div>
</div> 

</div>
</div> */}