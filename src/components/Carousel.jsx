import React from 'react'

const imagesArray=[
    "carosello/c1.jpg",
    "carosello/c2.jpg",
    "carosello/c3.jpg",
    "carosello/c4.jpg",
    "carosello/c5.jpg",
    "carosello/c6.jpg",
    "carosello/c7.jpg",
    "carosello/c8.jpg",
    "carosello/c9.jpg",
    "carosello/c10.jpg",
    "carosello/c11.jpg",
    "carosello/c12.jpg",
]

function Carousel() {

  return (
    <div className="carousel my-12 mx-4">
        <div className="carousel-item">
            {imagesArray.map(image=>(
                <img 
                key={image}
                src={image}
                className='w-64 h-64 lg:w-96 lg:h-96 object-cover ' />
            ))}
            
        </div>
    </div>
  )
}

export default Carousel