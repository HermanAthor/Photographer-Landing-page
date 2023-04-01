import React from 'react'
import galleryData from './galleryData'
import "./gallery.css"

function Gallery() {
  console.log(galleryData)
  return (
    <div className='gallery-container'>
      <h1 className='welcome'>Welcome to my Gallery</h1>
      <div className='container'>
        {galleryData.map((data)=>{
          return <div className='images-container' key={data.id}>
                  <img className='image' src={data.image} alt="image" />
                </div>
        })}
      </div>
    </div>
  )
}

export default Gallery